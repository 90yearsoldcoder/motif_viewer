import PropTypes from "prop-types";
import buttons from "../styles/Buttons.module.css";

function GeneListItem({ gene, selectedGene, setSelectedGene }) {
  function onChange() {
    setSelectedGene(gene);
  }

  let style = buttons.itemButton;
  if (gene === selectedGene) style += " " + buttons.itemSelected;

  return (
    <div onClick={onChange} className={style}>
      {gene}
    </div>
  );
}

GeneListItem.propTypes = {
  gene: PropTypes.string.isRequired,
  selectedGene: PropTypes.string.isRequired,
  setSelectedGene: PropTypes.func.isRequired,
};

export default GeneListItem;
