import { useState } from "react";
import axios from "axios";
import { DashboardStateProps } from "../types/DashboardTypes";

const SearchBar = ({ setDashboardData }: DashboardStateProps) => {
  const [ip, setIp] = useState<string>("");

  const handleClick = async () => {
    const { data } = await axios.get(
      `https://geo.ipify.org/api/v2/country?apiKey=at_xRPXe7urD57Ee2ZsV4oIsqArQOgCq&ipAddress=${ip}`
    );

    setDashboardData({
      ipAddress: data.ip,
      location: data.location.country + ", " + data.location.region,
      timezone: data.location.timezone,
      isp: data.isp,
    });

    getCords();
  };

  const getCords = async () => {
    var dir1 = "5th ave, new york";
    var google_url =
      "http://maps.googleapis.com/maps/api/geocode/json?address=";
    var sensor = "&sensor=false";

    const cords = await axios.get(google_url + dir1 + sensor);
    console.log(cords);
    
  };

  return (
    <div className="bg-pattern bg-no-repeat bg-cover h-60 flex flex-col">
      <h1 className="text-3xl text-center pt-6 text-white">
        IP Address Tracker
      </h1>
      <div className="w-full flex justify-center">
        <input
          type="text"
          onChange={(e) => setIp(e.target.value)}
          placeholder="Search for any IP address or domain"
          className="h-10 pl-4 mt-6 w-1/2 rounded-l-xl border-none outline-none text-sm sm:text-lg"
        />
        <button
          onClick={handleClick}
          className="mt-auto h-10 w-10 rounded-r-xl flex items-center bg-black hover:bg-slate-600"
        >
          <svg
            className="mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="14"
          >
            <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
