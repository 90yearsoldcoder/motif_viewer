import PropTypes from "prop-types";
import layout from "../styles/layout.module.css";
import fonts from "../styles/fonts.module.css";

const MetaPanel = ({ meta }) => {
  return (
    <div className={layout.metaPanel}>
      <div className={fonts.metaContent}>{meta["name"]}</div>
      <div>
        <span className={fonts.metaTitle}>Length: </span>
        <span className={fonts.metaContent}>{meta["length"]}</span>
      </div>
      <div>
        <span className={fonts.metaTitle}>Range: </span>
        <span
          className={fonts.metaContent}
        >{`${meta["start"]} - ${meta["end"]}`}</span>
      </div>
    </div>
  );
};

MetaPanel.propTypes = {
  meta: PropTypes.object.isRequired,
};

export default MetaPanel;
