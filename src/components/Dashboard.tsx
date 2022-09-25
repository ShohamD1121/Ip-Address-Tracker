import { DashboardStateProps } from "../types/DashboardTypes";
import DashboardItem from "./DashboardItem";

const Dashboard = ({ dashboardData }: DashboardStateProps) => {
  return (
    <div className="flex mb-4">
      <div className="flex md:flex-row flex-col h-auto w-11/12 bg-white rounded-lg p-5 mx-auto">
        <DashboardItem
          itemName="ip address"
          dashboardDataItem={dashboardData.ipAddress}
        />
        <DashboardItem
          itemName="location"
          dashboardDataItem={dashboardData.location}
        />
        <DashboardItem
          itemName="timezone"
          dashboardDataItem={dashboardData.timezone}
        />
        <DashboardItem itemName="isp" dashboardDataItem={dashboardData.isp} />
      </div>
    </div>
  );
};

export default Dashboard;
