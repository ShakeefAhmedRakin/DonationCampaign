import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveDonation } from "../../utility/localStorage";

const CampaignDetails = () => {
  const campaigns = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const campaign = campaigns.find((campaign) => campaign.id === idInt);
  const buttonBgStyle = {
    backgroundColor: campaign.textColor,
  };

  const handleDonateButton = (id) => {
    const alreadyDonated = saveDonation(id);

    !alreadyDonated
      ? toast.success("Thank you donating.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          icon: false,
          theme: "colored",
        })
      : toast.error("You've already donated to this campaign.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          icon: false,
          theme: "colored",
        });
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
              onClick={() => handleDonateButton(campaign.id)}
            >
              Donate {campaign.price}
            </button>
          </div>
        </div>

        <h1 className="font-bold text-4xl mt-14 mb-6">{campaign.title}</h1>
        <p className="text-gray-700 mb-[100px]">{campaign.description}</p>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default CampaignDetails;
