import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonatedCampaign = ({ campaign }) => {
  const {
    id,
    title,
    price,
    picture,
    category,
    cardBackground,
    badgeBackground,
    textColor,
  } = campaign;

  const cardBgStyle = {
    backgroundColor: cardBackground,
  };

  const badgeStyle = {
    backgroundColor: badgeBackground,
    color: textColor,
  };

  const textStyle = {
    color: textColor,
  };

  const buttonBgStyle = {
    backgroundColor: textColor,
  };
  return (
    <>
      <div
        className="rounded-lg flex flex-col md:flex-row gap-6"
        style={cardBgStyle}
      >
        <img
          src={picture}
          className="aspect-square w-full md:w-[200px] object-cover rounded-tr-lg rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none"
        />
        <div className="flex flex-col justify-center items-center md:items-start gap-y-1 pb-4">
          <p
            className="badge font-medium text-sm rounded-lg p-3 border-none"
            style={badgeStyle}
          >
            {category}
          </p>
          <h2 className="text-xl font-semibold text-center md:text-left px-1">
            {title}
          </h2>
          <p className="font-semibold" style={textStyle}>
            {price}
          </p>
          <div className="mt-1">
            <Link to={`/campaign/${id}`}>
              <button
                className="btn btn-sm text-white font-semibold border-none normal-case hover:scale-[1.03] duration-300"
                style={buttonBgStyle}
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

DonatedCampaign.propTypes = {
  campaign: PropTypes.object,
};
export default DonatedCampaign;
