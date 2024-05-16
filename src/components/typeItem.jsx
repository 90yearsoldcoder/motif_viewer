import PropTypes from "prop-types";
import buttons from "../styles/Buttons.module.css";

function TypeItem({ area, selectedAreaType, setSelectedAreaType }) {
  function onChange() {
    setSelectedAreaType(area);
  }

  let style = buttons.itemButton;
  if (area === selectedAreaType) style += " " + buttons.itemSelected;

  return (
    <div onClick={onChange} className={style}>
      {area}
    </div>
  );
}

TypeItem.propTypes = {
  area: PropTypes.string.isRequired,
  selectedAreaType: PropTypes.string.isRequired,
  setSelectedAreaType: PropTypes.func.isRequired,
};

export default TypeItem;
