import PropTypes from "prop-types";
import buttons from "../styles/Buttons.module.css";

function MotifListItem({ motifData, selectedMotif, setSelectedMotif }) {
  function onChange() {
    setSelectedMotif(motifData["motif_name"]);
  }

  let style = buttons.itemButton;
  if (motifData["motif_name"] === selectedMotif)
    style += " " + buttons.itemSelected;

  return (
    <div onClick={onChange} className={style}>
      {motifData["motif_name"] + " " + motifData["count"]}
    </div>
  );
}

MotifListItem.propTypes = {
  motifData: PropTypes.array.isRequired,
  selectedMotif: PropTypes.string.isRequired,
  setSelectedMotif: PropTypes.func.isRequired,
};

export default MotifListItem;
