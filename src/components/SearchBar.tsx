import React, { useState } from "react";
import axios from "axios";
import { DashboardStateProps } from "../types/DashboardTypes";

const SearchBar: React.FC<DashboardStateProps> = ({ setDashboardData }) => {
  const [ip, setIp] = useState<string>("");
  const [notFound, setNotFound] = useState<boolean>(false);

  const handleClick = async () => {
    if (ip !== "") {
      const { data }: any = await axios
        .get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_xRPXe7urD57Ee2ZsV4oIsqArQOgCq&ipAddress=${ip}`
        )
        .catch((err) => console.log(err.message));

      if (data.location.country !== "ZZ") {
        setNotFound(false);
        setDashboardData({
          ipAddress: data.ip,
          location: data.location.country + ", " + data.location.region,
          timezone: data.location.timezone,
          isp: data.isp,
          latitude: data.location.lat,
          longitude: data.location.lng,
        });
      } else {
        setNotFound(true);
      }
    }
  };

  return (
    <div className="flex flex-col md:mb-20 mb-8">
      <h1 className="text-3xl text-center pt-6 text-white">
        IP Address Tracker
      </h1>
      <div className="w-full flex justify-center">
        <input
          required
          pattern="^([0-9]{1,3}\.){3}[0-9]{1,3}$"
          onChange={(e) => setIp(e.target.value)}
          placeholder="Search for any IP address"
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
      <p className="text-center text-gray-300">For Example, Try 16.49.64.100</p>
      {notFound && (
        <h2 className="text-red-600 mt-4 text-center">
          This ip address does not exist on our API
        </h2>
      )}
    </div>
  );
};

export default SearchBar;
