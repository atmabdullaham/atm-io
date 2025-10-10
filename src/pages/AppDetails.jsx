import { BiSolidLike } from "react-icons/bi";
import { GoDownload } from "react-icons/go";
import { MdOutlineStar } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";

import RatingBarChart from "../components/RatingBarChart";
import { downloadsConverter } from "../utils/utils";

const AppDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const detailsToShow = data?.find((book) => book.id === parseInt(id));
  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = detailsToShow;
  const downloadsFinal = downloadsConverter(downloads);

  const totalReviews = ratings?.reduce(
    (count, rating) => count + rating.count,
    0
  );
  const totalReviewsFinal = downloadsConverter(totalReviews);

  return (
    <div className="py-10 bg-gray-100">
      <div className="w-11/12 mx-auto space-y-10">
        <div className="flex justify-start items-center gap-10 ">
          <img src={image} alt="" className="rounded-lg w-70 bg-white" />

          <div className="space-y-5  flex-1">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="text-lg font-medium  bg-gradient-to-r from-violet-700 to-purple-500 text-transparent bg-clip-text">
                <span className="text-gray-600 font-normal">developed by </span>
                {companyName}
              </p>
            </div>
            <hr className="text-gray-400" />
            <div className="flex items-center gap-6">
              <div className="space-y-2">
                <GoDownload
                  size={30}
                  className="text-green-500"
                  strokeWidth={2}
                />
                <p className="text-base font-normal text-gray-600">Downloads</p>
                <h1 className="text-4xl font-bold">{downloadsFinal}</h1>
              </div>
              <div className="space-y-2">
                <MdOutlineStar size={30} className="text-orange-400" />
                <p className="text-base font-normal text-gray-600">
                  Average Ratings
                </p>
                <h1 className="text-4xl font-bold">{ratingAvg}</h1>
              </div>
              <div className="space-y-2">
                <BiSolidLike size={30} className="text-purple-500" />
                <p className="text-base font-normal text-gray-600 ">
                  Total Reviews
                </p>
                <h1 className="text-4xl font-bold">{totalReviewsFinal}</h1>
              </div>
            </div>
            <button className="btn bg-emerald-400 text-white text-lg font-semibold py-3 px-5">
              Install Now ({size})
            </button>
          </div>
        </div>
        <hr className="text-gray-400 " />
        <div>
          <RatingBarChart ratings={ratings}></RatingBarChart>
        </div>
        <hr className="text-gray-400 " />
        <div>
          <h2 className="text-xl font-semibold">Description</h2>
          <p className="text-lg font-normal text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
