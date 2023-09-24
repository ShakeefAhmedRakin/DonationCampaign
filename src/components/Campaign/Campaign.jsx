import PropTypes from "prop-types";

const Campaign = ({ campaign }) => {
  const {
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
      <div className="rounded-lg" style={cardBgStyle}>
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
    </>
  );
};

Campaign.propTypes = {
  campaign: PropTypes.object,
};

export default Campaign;
