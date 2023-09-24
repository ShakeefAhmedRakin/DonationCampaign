import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const Root = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Root;
