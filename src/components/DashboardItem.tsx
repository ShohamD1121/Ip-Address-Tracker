import React from "react";

const DashboardItem = ({ itemName, dashboardDataItem }: any) => {
  return (
    <div className="flex md:flex-col md:w-1/4 w-full">
      <p className="break-words text-gray-500 uppercase text-xs w-1/2">
        {itemName}
      </p>
      <p className="break-words text-black font-semibold md:w-full md:text-lg text-xs leading-7 w-1/2">
        {dashboardDataItem}
      </p>
    </div>
  );
};

export default DashboardItem;
