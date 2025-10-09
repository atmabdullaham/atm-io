import { use } from "react";
import { Link } from "react-router";
import AppCard from "./AppCard";

const TopApps = ({ promise }) => {
  const data = use(promise);
  const topAppsData = data.slice(0, 8);
  console.log(topAppsData);

  return (
    <div className="py-10 space-y-10">
      <div className=" text-center space-y-4">
        <h1 className="text-5xl font-extrabold">Trending Apps</h1>
        <p className="text-xl font-normal text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 w-11/12 mx-auto">
        {topAppsData.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          to="/all-apps"
          className="btn bg-gradient-to-r from-violet-700 to-purple-500 text-white text-base font-semibold border-0"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default TopApps;
