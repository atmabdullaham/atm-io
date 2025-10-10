import { Link } from "react-router";
import errorImg from "../assets/error-404.png";
const ErrorPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="w-11/12 mx-auto flex flex-col items-center pt-20 gap-16 ">
        <img src={errorImg} alt="" />
        <Link to="/">
          <button className="btn bg-purple-500 text-white">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
