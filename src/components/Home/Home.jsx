import { useState } from "react";
import Banner from "../Banner/Banner";
import Campaigns from "../Campaigns/Campaigns";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(e.target.searchText.value);
    e.target.searchText.value = "";
  };

  return (
    <>
      <Banner searchFunction={handleSearch}></Banner>
      <Campaigns searchText={searchText}></Campaigns>
    </>
  );
};

export default Home;
