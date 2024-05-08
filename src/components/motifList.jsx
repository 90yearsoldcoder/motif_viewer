import PropTypes from "prop-types";
import layout from "../styles/layout.module.css";
import MotifListItem from "./motifListItem";

function MotifList({ motifsData, selectedMotif, setSelectedMotif }) {
  if (!motifsData) return <span>Motif Selector</span>;
  //console.log(motifsData);
  return (
    <div>
      <span>RBP Selector</span>
      <div className={layout.selectList}>
        {/* modify upstream processing, provide an id for motif */}
        {motifsData.map((mofif, index) => (
          <MotifListItem
            key={index}
            motifData={mofif}
            selectedMotif={selectedMotif}
            setSelectedMotif={setSelectedMotif}
          ></MotifListItem>
        ))}
      </div>
    </div>
  );
}

MotifList.propTypes = {
  motifsData: PropTypes.array,
  selectedMotif: PropTypes.string.isRequired,
  setSelectedMotif: PropTypes.func.isRequired,
};

export default MotifList;
