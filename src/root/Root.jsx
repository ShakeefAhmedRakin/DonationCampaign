import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { useState } from "react";
import Banner from "../components/Banner/Banner";

const Root = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(e.target.searchText.value);
    e.target.searchText.value = "";
  };

  const location = useLocation();

  const bgImage =
    location.pathname === "/"
      ? {
          backgroundImage:
            "url(https://i.ibb.co/sqkqKYC/fc1f79e18cdc1a12320b9b10ec3e253d-min.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }
      : {};

  return (
    <>
      <div className="relative">
        <div
          style={bgImage}
          className="w-full h-full absolute inset-0 -z-10"
        ></div>

        <div className="absolute bg-white h-full w-full bg-opacity-80 top-0 -z-10"></div>
        <div className="z-10">
          <NavBar></NavBar>
          <div className={`${location.pathname === "/" ? "" : "hidden"}`}>
            <Banner searchFunction={handleSearch}></Banner>
          </div>
        </div>
      </div>

      <Outlet context={searchText}></Outlet>
    </>
  );
};

export default Root;
