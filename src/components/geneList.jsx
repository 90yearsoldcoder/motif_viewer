import PropTypes from "prop-types";
import layout from "../styles/layout.module.css";
import GeneListItem from "./geneListItem";

function GeneList({ geneData, selectedGene, setSelectedGene }) {
  return (
    <div>
      <span>Gene Selector</span>
      <div className={layout.selectList}>
        {Object.entries(geneData).map(([key]) => (
          <GeneListItem
            key={key}
            gene={key}
            selectedGene={selectedGene}
            setSelectedGene={setSelectedGene}
          ></GeneListItem>
        ))}
      </div>
    </div>
  );
}

GeneList.propTypes = {
  geneData: PropTypes.object.isRequired,
  selectedGene: PropTypes.string.isRequired,
  setSelectedGene: PropTypes.func.isRequired,
};

export default GeneList;
