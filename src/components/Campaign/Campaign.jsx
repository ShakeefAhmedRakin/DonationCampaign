import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Campaign = ({ campaign }) => {
  const {
    id,
    title,
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

  return (
    <>
      <Link to={`/campaign/${id}`}>
        <div
          className="rounded-lg h-full border-[1px] border-transparent hover:border-black duration-300 "
          style={cardBgStyle}
        >
          <img
            src={picture}
            className="rounded-lg rounded-b-none object-cover h-[194px] w-full"
          />

          <div className="p-3">
            <p
              className="badge font-medium text-sm rounded-lg p-3 border-none"
              style={badgeStyle}
            >
              {category}
            </p>

            <h4 className="font-bold text-lg" style={textStyle}>
              {title}
            </h4>
          </div>
        </div>
      </Link>
    </>
  );
};

Campaign.propTypes = {
  campaign: PropTypes.object,
};

export default Campaign;
