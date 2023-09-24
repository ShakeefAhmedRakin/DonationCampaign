import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const Root = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="px-5 md:px-[100px] lg:px-[150px] md:container mx-auto">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Root;
