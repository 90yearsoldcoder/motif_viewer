import { SeqViz } from "seqviz";
import adjustColorByScore from "../functions/colorPanel";
import PropTypes from "prop-types";

const GeneViz = ({
  geneData,
  GeneName,
  selectedAreaType,
  selectedAreaName,
}) => {
  const seq = "seq" in geneData ? geneData["seq"] : "";
  const seqType = "type" in geneData ? geneData["type"] : "";

  let targets = [];
  if (selectedAreaType in geneData) {
    //console.log(geneData);
    //console.log(selectedAreaType);
    for (let target of geneData[selectedAreaType]) {
      if (target["motif_name"] === selectedAreaName) {
        for (let ind = 0; ind < target["count"]; ind++)
          targets.push({
            name:
              target["motif_name"] +
              " score: " +
              target["scores"][ind].toFixed(2),
            start: target["positions"][ind][0],
            end: target["positions"][ind][1],
            direction: 1,
            color: adjustColorByScore("#f07167", target["scores"][ind], 5, 15),
          });
        break;
      }
    }
  }

  return (
    <>
      <SeqViz
        name={GeneName}
        seq={seq}
        viewer={seqType}
        showComplement={false}
        zoom={{ linear: 80 }}
        annotations={targets}
      />
    </>
  );
};

GeneViz.propTypes = {
  geneData: PropTypes.object.isRequired,
  GeneName: PropTypes.string.isRequired,
  selectedAreaType: PropTypes.string.isRequired,
  selectedAreaName: PropTypes.string.isRequired,
};

export default GeneViz;
