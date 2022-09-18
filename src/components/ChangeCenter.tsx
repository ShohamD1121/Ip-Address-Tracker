import { useMap } from "react-leaflet";

interface ChangeCenterProps {
  position: { lat: number; lng: number };
}
const ChangeCenter: React.FC<ChangeCenterProps> = ({ position }) => {
  const map = useMap();
  map.flyTo(position);
  return <></>;
};

export default ChangeCenter;
