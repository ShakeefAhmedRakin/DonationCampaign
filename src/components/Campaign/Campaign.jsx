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
      <Link to={`/campaign/${id}`} className="hover:scale-[1.01] duration-200">
        <div className="rounded-lg h-full" style={cardBgStyle}>
          <img src={picture} className="rounded-lg rounded-b-none" />
          <div className="p-3">
            <p
              className="badge font-medium text-sm rounded-lg p-3"
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
