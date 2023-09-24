import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localStorage";
import DonatedCampaign from "../DonatedCampaign/DonatedCampaign";
import { useState } from "react";

const Donations = () => {
  const [dataLength, setDataLength] = useState(4);

  const allCampaigns = useLoaderData();
  const storedDonations = getStoredDonation();
  const displayCampaigns = allCampaigns.filter((campaign) =>
    storedDonations.includes(campaign.id)
  );

  console.log(displayCampaigns.length);

  return (
    <>
      <div className="px-5 md:px-[100px] lg:px-[150px] md:container mx-auto">
        {displayCampaigns.length === 0 || (
          <div>
            <div className="grid grid-cols-2 gap-6">
              {displayCampaigns.slice(0, dataLength).map((campaign) => (
                <DonatedCampaign
                  key={campaign.id}
                  campaign={campaign}
                ></DonatedCampaign>
              ))}
            </div>
            <div className="text-center mb-[100px]">
              <button
                onClick={() => {
                  setDataLength(displayCampaigns.length);
                }}
                className={`btn bg-primaryTwo text-white normal-case px-8 hover:bg-primaryTwo mt-6 ${
                  displayCampaigns.length <= 4 ? "invisible" : "visible"
                } ${dataLength === displayCampaigns.length ? "invisible" : ""}`}
              >
                See All
              </button>
            </div>
          </div>
        )}

        {displayCampaigns.length === 0 && (
          <div className="py-20">
            <h1 className="text-center text-4xl font-semibold">
              No donations made yet!
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Donations;
