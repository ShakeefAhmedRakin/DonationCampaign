import Campaigns from "../Campaigns/Campaigns";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const searchText = useOutletContext();
  return (
    <>
      <Campaigns searchText={searchText}></Campaigns>
    </>
  );
};

export default Home;
