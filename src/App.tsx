import { Fragment, useState } from "react";
import SearchBar from "./components/SearchBar";
import Map from "./components/Map";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [dashboardData, setDashboardData] = useState({
    ipAddress: "",
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

/* <div className="App">
IP Address Tracker 
Search for any IP address or domain 
IP Address 
Location
Timezone UTC ISP // add offset value dynamically using the API
</div> */

// "browserslist": {
//   "production": [
//     ">0.2%",
//     "not dead",
//     "not op_mini all"
//   ],
//   "development": [
//     "last 1 chrome version",
//     "last 1 firefox version",
//     "last 1 safari version"
//   ]
// }
