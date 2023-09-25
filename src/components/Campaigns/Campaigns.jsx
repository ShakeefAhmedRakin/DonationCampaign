import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Campaign from "../Campaign/Campaign";

const Campaigns = ({ searchText }) => {
  const [allCampaigns, setAllCampaigns] = useState([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);

  useEffect(() => {
    fetch("/campaigns.json")
      .then((res) => res.json())
      .then((data) => setAllCampaigns(data));
  }, []);

  useEffect(() => {
    const filtered = allCampaigns.filter((campaign) =>
      campaign.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredCampaigns(filtered);
  }, [searchText, allCampaigns]);

  return (
    <>
      <div className="px-5 md:px-[100px] lg:px-[150px] md:container mx-auto mt-[100px] mb-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCampaigns.map((campaign) => (
            <Campaign key={campaign.id} campaign={campaign}></Campaign>
          ))}
        </div>
      </div>
    </>
  );
};

Campaigns.propTypes = {
  searchText: PropTypes.node,
};

export default Campaigns;
