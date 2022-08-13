import React, { useState } from "react";
import axios from "axios";
import { API_KEY } from "../constants/API_KEY";
import { DashboardStateProps} from '../types/DashboardState';

const SearchBar = ({ dashboardData, setDashboardData }: DashboardStateProps) => {
  const [ip, setIp] = useState<string>("");
  
  const handleClick = async () => {
    const data = await axios.get(`
    https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}&ipAddress=${ip}`);
    setDashboardData({
      ipAddress: data.data.ip,
      location: data.data.location.country + ", " + data.data.location.region,
      timezone: data.data.location.timezone,
      isp: data.data.isp,
    });
    console.log(data);
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
