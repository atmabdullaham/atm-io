import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa";
import hero from "../assets/hero.png";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 w-11/12 mx-auto pt-10">
      <div className="md:w-6/12 mx-auto space-y-4 text-center">
        <h1 className="text-5xl font-bold text-center">
          We build <br />{" "}
          <span className="font-black text-violet-700">Productive</span> Apps
        </h1>
        <p className="text-xl font-normal text-gray-500">
          At ATM.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
      </div>

      <div>
        <button className="btn text-xl font-semibold">
          <BiLogoPlayStore /> Google Play
        </button>
        <button className="btn text-xl font-semibold">
          <FaAppStoreIos />
          App Store
        </button>
      </div>
      <div>
        <img src={hero} alt="" className="w-8/12 mx-auto" />
      </div>
    </div>
  );
};

export default Banner;
