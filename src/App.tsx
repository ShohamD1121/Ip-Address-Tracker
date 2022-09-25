import React, { Fragment, useState } from "react";
import SearchBar from "./components/SearchBar";
import Map from "./components/Map";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { DashBoradDataTypes } from "./types/DashboardTypes";

const App: React.FC = () => {
  const [dashboardData, setDashboardData] = useState<DashBoradDataTypes>({
    ipAddress: "",
    location: "",
    timezone: "",
    isp: "",
    latitude: "",
    longitude: "",
  });

  return (
    <Fragment>
      <div className="relative">
        <div className="flex flex-col bg-pattern bg-no-repeat bg-cover">
          <SearchBar
            dashboardData={dashboardData}
            setDashboardData={setDashboardData}
          />
          <Dashboard
            dashboardData={dashboardData}
            setDashboardData={setDashboardData}
          />
        </div>
        <Map
          dashboardData={dashboardData}
          setDashboardData={setDashboardData}
        />
      </div>
    </Fragment>
  );
};

export default App;
