const Banner = () => {
  return (
    <>
      <div className="px-5 md:px-[100px] lg:px-[150px] md:container mx-auto">
        <div className="flex flex-col justify-center items-center gap-10 py-48 border-2 border-black">
          <h1 className="text-5xl font-bold text-center">
            I Grow By Helping People In Need
          </h1>
          <div className="flex">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs rounded-r-none"
            />
            <button className="btn bg-primaryOne text-white rounded-l-none normal-case">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
