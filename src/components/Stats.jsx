const Stats = () => {
  return (
    <div className="bg-gradient-to-r from-violet-700 to-purple-500 py-10">
      <div className="w-11/12 mx-auto">
        <h1 className="text-5xl font-bold text-white text-center">
          Trusted by Millions, Built for You
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 text-white">
          <div className="flex flex-col text-center items-center">
            <h3>Total Downloads</h3>
            <h1 className="text-6xl font-extrabold">29.6M</h1>
          </div>
          <div className="flex flex-col text-center items-center">
            <h3>Total Reviews</h3>
            <h1 className="text-6xl font-extrabold">906K</h1>
          </div>
          <div className="flex flex-col text-center items-center">
            <h3>Active Apps</h3>
            <h1 className="text-6xl font-extrabold">132+</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
