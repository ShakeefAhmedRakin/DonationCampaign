import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localStorage";
import DonatedCampaign from "../DonatedCampaign/DonatedCampaign";

const Donations = () => {
  const allCampaigns = useLoaderData();

  const storedDonations = getStoredDonation();

  const displayCampaigns = allCampaigns.filter((campaign) =>
    storedDonations.includes(campaign.id)
  );

  return (
    <>
      <div className="px-5 md:px-[100px] lg:px-[150px] md:container mx-auto">
        <div className="grid grid-cols-2 gap-6">
          {displayCampaigns.map((campaign) => (
            <DonatedCampaign
              key={campaign.id}
              campaign={campaign}
            ></DonatedCampaign>
          ))}
        </div>
      </div>
    </>
  );
};

export default Donations;
