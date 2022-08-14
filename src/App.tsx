import React,{ Fragment, useState } from "react";
import SearchBar from "./components/SearchBar";
import Map from "./components/Map";
import Dashboard from "./components/Dashboard";
import { DashBoradDataTypes } from "./types/DashboardTypes";
import "./App.css";

const App : React.FC = () => {
  const [dashboardData, setDashboardData] = useState<DashBoradDataTypes>({
    ipAddress : "",
    location: "",
    timezone: "",
    isp: "",
  });

  return (
    <Fragment>
      <div className="relative">
        <Dashboard dashboardData={dashboardData} setDashboardData={setDashboardData} />
        <SearchBar dashboardData={dashboardData} setDashboardData={setDashboardData} />
        <Map />
      </div>
    </Fragment>
  );
}

export default App;
