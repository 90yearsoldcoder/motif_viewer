import PropTypes from "prop-types";
import layout from "../styles/layout.module.css";
import extractInfo from "../functions/typeOfArea";
import TypeItem from "./typeItem";

function TypeSelector({ selectedAreaType, setSelectedAreaType }) {
  return (
    <div>
      <span>Viewer Selector</span>
      <div className={layout.selectList}>
        {Object.keys(extractInfo).map((key) => (
          <TypeItem
            key={key}
            area={key}
            selectedAreaType={selectedAreaType}
            setSelectedAreaType={setSelectedAreaType}
          ></TypeItem>
        ))}
      </div>
    </div>
  );
}

TypeSelector.propTypes = {
  selectedAreaType: PropTypes.string.isRequired,
  setSelectedAreaType: PropTypes.func.isRequired,
};

export default TypeSelector;
