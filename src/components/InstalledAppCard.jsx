import { GoDownload } from "react-icons/go";
import { MdOutlineStar } from "react-icons/md";
import { downloadsConverter } from "../utils/utils";

const InstalledAppCard = ({ app, handleUninstall }) => {
  const {
    image,
    title,
    companyName,
    id,
    descripion,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = app;
  const downloadsFinal = downloadsConverter(downloads);
  return (
    <div className="bg-white flex items-center justify-between p-4 rounded-lg">
      <div className="flex gap-4">
        <img src={image} alt="" className="w-14 rounded-lg" />
        <div>
          <h2 className="card-title text-xl font-medium">{title}</h2>
          <div className="card-actions justify-between">
            <button className="flex items-center gap-0.5 text-emerald-400  py-1 rounded-lg text-base font-medium">
              <GoDownload />
              {downloadsFinal}
            </button>
            <button className="flex items-center gap-0.5 text-orange-400   rounded-lg text-base font-medium px-2 py-1">
              <MdOutlineStar />
              {ratingAvg}
            </button>
            <button className="text-base font-medium text-gray-600 px-2 py-1">
              {size}MB
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => handleUninstall(id)}
        className="btn bg-emerald-400 text-white"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledAppCard;
