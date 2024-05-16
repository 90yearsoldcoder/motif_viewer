import PropTypes from "prop-types";
import layout from "../styles/layout.module.css";
import MotifListItem from "./motifListItem";

function MotifList({
  selectedAreaType,
  motifsData,
  selectedMotif,
  setSelectedMotif,
}) {
  if (!motifsData) return <span>{selectedAreaType} Selector</span>;
  //console.log(motifsData);
  return (
    <div>
      <span>{selectedAreaType} Selector</span>
      <div className={layout.selectList}>
        {/* modify upstream processing, provide an id for motif */}
        {motifsData.map((motif, index) => (
          <MotifListItem
            key={index}
            motifData={motif}
            selectedMotif={selectedMotif}
            setSelectedMotif={setSelectedMotif}
          ></MotifListItem>
        ))}
      </div>
    </div>
  );
}

MotifList.propTypes = {
  selectedAreaType: PropTypes.string.isRequired,
  motifsData: PropTypes.array,
  selectedMotif: PropTypes.string.isRequired,
  setSelectedMotif: PropTypes.func.isRequired,
};

export default MotifList;
