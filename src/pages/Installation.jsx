import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import InstalledAppCard from "../components/installedAppCard";
import { getStoreApps, removeFromStoreDB } from "../utils/utils";

const Installation = () => {
  const [installedAppsToShow, setInstalledAppsToShow] = useState([]);
  const data = useLoaderData();
  console.log(data);
  useEffect(() => {
    const installedAppId = getStoreApps();
    const installedApps = data.filter((app) =>
      installedAppId.some((id) => parseInt(id) === parseInt(app.id))
    );
    setInstalledAppsToShow(installedApps);
  }, [data]);
  const handleSort = (type) => {
    if (type === "Low-High") {
      const sortedLowToHigh = [...installedAppsToShow].sort(
        (a, b) => a.size - b.size
      );
      setInstalledAppsToShow(sortedLowToHigh);
    } else if (type === "High-Low") {
      const sortedHighToLow = [...installedAppsToShow].sort(
        (a, b) => b.size - a.size
      );
      setInstalledAppsToShow(sortedHighToLow);
    }
  };

  const handleUninstall = (id) => {
    removeFromStoreDB(id);
    setInstalledAppsToShow(
      installedAppsToShow.filter((apps) => parseInt(apps.id) !== parseInt(id))
    );
  };

  return (
    <div className="bg-gray-200">
      {" "}
      <div className="w-11/12 mx-auto py-10">
        <div className=" text-center space-y-4">
          <h1 className="text-4xl font-extrabold">Your Installed Apps</h1>
          <p className="text-xl font-normal text-gray-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="pt-10 flex items-center justify-between">
          <h1 className="text-xl font-semibold">
            ({installedAppsToShow.length})Apps Found
          </h1>
          <select
            className="select select-neutral"
            defaultValue=""
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="" disabled>
              Sort By Size
            </option>
            <option value="Low-High">Low-High</option>
            <option value="High-Low">High-Low</option>
          </select>
        </div>
        <div className="grid grid-cols-1 gap-4 pt-4">
          {installedAppsToShow?.map((app) => (
            <InstalledAppCard
              key={app.id}
              app={app}
              handleUninstall={handleUninstall}
            ></InstalledAppCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
