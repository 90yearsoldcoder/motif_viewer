import { SeqViz } from "seqviz";
import PropTypes from "prop-types";
import extractInfo from "../functions/typeOfArea";

const GeneViz = ({
  geneData,
  GeneName,
  selectedAreaType,
  selectedAreaName,
  setMetaData,
}) => {
  const seq = "seq" in geneData ? geneData["seq"] : "";
  const seqType = "type" in geneData ? geneData["type"] : "";

  let targets = [];
  console.log(selectedAreaType);
  console.log(Object.keys(extractInfo));
  console.log(selectedAreaType in extractInfo);
  if (selectedAreaType in extractInfo && selectedAreaType in geneData) {
    //console.log(geneData);
    //console.log(selectedAreaType);
    console.log("in");
    targets = extractInfo[selectedAreaType](geneData, selectedAreaName);
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
        onSelection={(info) => {
          //console.log(info);
          setMetaData({
            name: info["name"],
            start: info["start"],
            end: info["end"],
            length: info["length"],
          });
        }}
      />
    </>
  );
};

GeneViz.propTypes = {
  geneData: PropTypes.object.isRequired,
  GeneName: PropTypes.string.isRequired,
  selectedAreaType: PropTypes.string.isRequired,
  selectedAreaName: PropTypes.string.isRequired,
  setMetaData: PropTypes.func,
};

export default GeneViz;
