import { DashboardStateProps} from '../types/DashboardTypes';

const Dashboard = ({ dashboardData } : DashboardStateProps) => {



  return (
    <div className="flex bg-transparent h-24 w-full rounded-lg absolute z-10 mt-48 items-center">
      <div className="flex bg-white h-24 w-11/12 rounded-lg mx-auto p-5">
        <div className="flex w-1/4">
          <div className="w-8/12">
            <p className="break-words text-gray-500 uppercase text-xs">
              ip address
            </p>
            <p className="break-words text-black font-semibold text-lg leading-7">
              {dashboardData.ipAddress}
            </p>
          </div>
          <div className="w-1/12">
            <hr className="border-1 w-16 border-gray-300 mt-7 mx-auto rotate-90" />
          </div>
        </div>
        <div className="flex w-1/4">
          <div className="w-8/12">
            <p className="break-words text-gray-500 uppercase text-xs">
              location
            </p>
            <p className="break-words text-black font-semibold text-lg leading-7">
              {dashboardData.location}
            </p>
          </div>
          <div className="w-1/12">
            <hr className="border-1 w-16 border-gray-300 mt-7 mx-auto rotate-90" />
          </div>
        </div>
        <div className="flex w-1/4">
          <div className="w-8/12">
            <p className="break-words text-gray-500 uppercase text-xs">
              timezone
            </p>
            <p className="break-words text-black font-semibold text-lg leading-7">
              {dashboardData.timezone}
            </p>
          </div>
          <div className="w-1/12">
            <hr className="border-1 w-16 border-gray-300 mt-7 mx-auto rotate-90" />
          </div>
        </div>
        <div className="flex w-1/4">
          <div className="w-full">
            <p className="break-words text-gray-500 uppercase text-xs">isp</p>
            <p className="break-words text-black font-semibold text-md leading-7">
              {dashboardData.isp}
            </p>
          </div>
          <div className="w-1/12"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
