import { useState } from "react";
import { useLoaderData } from "react-router";
import appsNotFound from "../assets/App-Error.png";
import AppCard from "../components/AppCard";

const AllApps = () => {
  const [search, setSearch] = useState("");
  const data = useLoaderData();
  console.log(search);
  const searchLowerCaseAndTrimed = search.trim().toLowerCase();
  const searchedApps = searchLowerCaseAndTrimed
    ? data.filter((app) =>
        app.title.toLowerCase().includes(searchLowerCaseAndTrimed)
      )
    : data;
  console.log(searchedApps);

  return (
    <div className="bg-gray-100">
      <div className="w-11/12 mx-auto py-10">
        <div className=" text-center space-y-4">
          <h1 className="text-4xl font-extrabold">Our All Applications</h1>
          <p className="text-xl font-normal text-gray-500">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="pt-10 flex items-center justify-between">
          <h1 className="text-xl font-semibold">
            ({searchedApps.length})Apps Found
          </h1>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search"
            />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4  pt-4">
          {searchedApps.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
        {searchedApps.length === 0 && (
          <div className="flex justify-center items-center">
            <img src={appsNotFound} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;
