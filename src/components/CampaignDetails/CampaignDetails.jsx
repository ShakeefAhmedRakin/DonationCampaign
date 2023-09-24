import { useLoaderData, useParams } from "react-router-dom";

const CampaignDetails = () => {
  const campaigns = useLoaderData();

  const { id } = useParams();

  const idInt = parseInt(id);

  const campaign = campaigns.find((campaign) => campaign.id === idInt);

  const buttonBgStyle = {
    backgroundColor: campaign.textColor,
  };

  return (
    <>
      <div className="px-5 md:px-[100px] lg:px-[150px] md:container mx-auto">
        <div className="flex justify-center relative rounded-lg">
          <img
            src={campaign.picture}
            className="h-[400px] lg:h-[700px] object-cover w-full rounded-lg"
          />
          <div className="absolute bottom-0 bg-black w-full bg-opacity-50 p-9 rounded-lg">
            <button
              style={buttonBgStyle}
              className="btn btn-lg text-white font-semibold border-none"
            >
              Donate {campaign.price}
            </button>
          </div>
        </div>

        <h1 className="font-bold text-4xl mt-14 mb-6">{campaign.title}</h1>
        <p className="text-gray-700 mb-[100px]">{campaign.description}</p>
      </div>
    </>
  );
};

export default CampaignDetails;
