import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import { DashboardStateProps } from "../types/DashboardTypes";

const Map = ({ dashboardData }: DashboardStateProps) => {

  const [Mark, setMark] = useState<any>(null);
  const [Markers, setMarkers] = useState<any>([]);

  useEffect(() => {
    if (dashboardData.ipAddress !== "") {
      setMarkers([...Markers, dashboardData]);
    } // eslint-disable-next-line
  }, [dashboardData]);


  return (
    <div className="relative z-0">
      <MapContainer center={[45.4, -75.7]} zoom={12} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {Markers.map((newMark: any, index: number) => (
          <Marker
            key={index}
            position={[newMark.latitude, newMark.longitude]}
            eventHandlers={{
              click: () => {
                setMark(newMark);
                if (Mark !== null) {
                  setMark(null);
                }
              },
            }}
          />
        ))}
        {Mark && (
          <Popup position={[Mark.latitude, Mark.longitude]}>
            <div>
              <h2>{Mark.isp}</h2>
            </div>
          </Popup>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
