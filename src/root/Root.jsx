import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div className="px-5 md:px-[150px] md:container mx-auto">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Root;
