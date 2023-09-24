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
      <div className="rounded-lg flex gap-6" style={cardBgStyle}>
        <img
          src={picture}
          className="aspect-square w-[200px] object-cover rounded-l-lg"
        />
        <div className="flex flex-col justify-center gap-y-1">
          <p
            className="badge font-medium text-sm rounded-lg p-3"
            style={badgeStyle}
          >
            {category}
          </p>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="font-semibold" style={textStyle}>
            {price}
          </p>
          <div className="mt-1">
            <Link to={`/campaign/${id}`}>
              <button
                className="btn btn-sm text-white font-semibold border-none normal-case"
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
