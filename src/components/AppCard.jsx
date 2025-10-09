import { GoDownload } from "react-icons/go";
import { MdOutlineStar } from "react-icons/md";

const AppCard = ({ app }) => {
  /**
 *
    "ratings": [
      { "name": "1 star", "count": 3850 },
      { "name": "2 star", "count": 5120 },
      { "name": "3 star", "count": 12890 },
      { "name": "4 star", "count": 38460 },
      { "name": "5 star", "count": 68130 }
    ]
 */
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

  const downloadsConverter = (downloads) => {
    console.log(downloads);
    let countK = 0;
    let countM = 0;
    let countB = 0;
    if (downloads >= 1000 && downloads < 1000000) {
      countK = downloads / 1000;
      countK = countK + "K";
      return countK;
    } else if (downloads >= 1000000 && downloads < 1000000000) {
      countM = downloads / 1000000;
      countM = countM + "M";
      return countM;
    } else if (downloads >= 1000000000) {
      countB = downloads / 1000000000;
      countB = countB + "B";
      return countB;
    }
  };

  const downloadsFinal = downloadsConverter(downloads);
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure className="px-4 pt-4 rounded-xl">
          <img src={image} alt={title} className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-medium">{title}</h2>

          <div className="card-actions justify-between">
            <button className="flex items-center gap-0.5 text-emerald-400 bg-amber-50 px-3 py-1 rounded-lg text-base font-medium">
              <GoDownload />
              {downloadsFinal}
            </button>
            <button className="flex items-center gap-0.5 text-orange-400 bg-orange-100  rounded-lg text-base font-medium px-3 py-1">
              <MdOutlineStar />
              {ratingAvg}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
