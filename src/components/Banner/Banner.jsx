import PropTypes from "prop-types";

const Banner = ({ searchFunction }) => {
  return (
    <>
      <div
        className="hero h-[600px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/Zfj20Zt/pexels-rdne-stock-project-6646918-min.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-80 bg-white"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-5xl flex flex-col gap-6">
            <h1 className="text-5xl font-bold text-center text-black">
              I Grow By Helping People In Need
            </h1>

            <form onSubmit={searchFunction} className="flex justify-center">
              <input
                type="text"
                name="searchText"
                placeholder="Search here..."
                className="input input-bordered w-full max-w-xs rounded-r-none text-black"
              />
              <button className="btn bg-primaryOne text-white rounded-l-none normal-case">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

Banner.propTypes = {
  searchFunction: PropTypes.function,
};

export default Banner;
