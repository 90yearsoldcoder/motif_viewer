import PropTypes from "prop-types";
import buttons from "../styles/Buttons.module.css";

function MotifListItem({ motifData, selectedMotif, setSelectedMotif }) {
  function onChange() {
    setSelectedMotif(motifData["name"]);
  }

  let style = buttons.itemButton;
  if (motifData["name"] === selectedMotif) style += " " + buttons.itemSelected;

  return (
    <div onClick={onChange} className={style}>
      {motifData["name"] + " " + motifData["count"]}
    </div>
  );
}

MotifListItem.propTypes = {
  motifData: PropTypes.object.isRequired,
  selectedMotif: PropTypes.string.isRequired,
  setSelectedMotif: PropTypes.func.isRequired,
};

export default MotifListItem;
