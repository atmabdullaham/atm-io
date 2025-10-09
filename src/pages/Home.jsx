import { Suspense } from "react";
import Banner from "../components/Banner";
import Stats from "../components/Stats";
import TopApps from "../components/TopApps";

const promise = fetch("./apps.json").then((res) => res.json());

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Banner></Banner>
      <Stats></Stats>
      <Suspense fallback={<span>Loading...</span>}>
        <TopApps promise={promise}></TopApps>
      </Suspense>
    </div>
  );
};

export default Home;
