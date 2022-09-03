import React,{ Fragment, useState } from "react";
import SearchBar from "./components/SearchBar";
import Map from "./components/Map";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { DashBoradDataTypes } from "./types/DashboardTypes";

const App : React.FC = () => {
  const [dashboardData, setDashboardData] = useState<DashBoradDataTypes>({
    ipAddress : "",
    location: "",
    timezone: "",
    isp: "",
    latitude : "",
    longitude : ""
  });

  return (
    <Fragment>
      <div className="relative">
        <Dashboard dashboardData={dashboardData} setDashboardData={setDashboardData} />
        <SearchBar dashboardData={dashboardData} setDashboardData={setDashboardData} />
        <Map dashboardData={dashboardData} setDashboardData={setDashboardData} />
      </div>
    </Fragment>
  );
}

export default App;
