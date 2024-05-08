import { useState } from "react";
import GeneViz from "./components/gene";
import "./App.css";
import JsonFileLoader from "./components/fileLoader";
import GeneList from "./components/geneList";
import MotifList from "./components/motifList";

function App() {
  /* Dev block */
  const [SeqData, setSeqData] = useState({});
  const [selectedGene, setSelectedGene] = useState("");
  const [selectedMotif, setSelectedMotif] = useState("");
  //const [selectedAreaType, setSelectedAreaType] = useState("motifs");
  const selectedAreaType = "motifs";

  return (
    <div className="main">
      <div className="sideBar">
        <JsonFileLoader
          SeqData={SeqData}
          setSeqData={setSeqData}
        ></JsonFileLoader>
        <GeneList
          geneData={SeqData}
          selectedGene={selectedGene}
          setSelectedGene={setSelectedGene}
        ></GeneList>
        <MotifList
          motifsData={
            SeqData[selectedGene] ? SeqData[selectedGene]["motifs"] : null
          }
          selectedMotif={selectedMotif}
          setSelectedMotif={setSelectedMotif}
        ></MotifList>
        <div>Gene: {selectedGene}</div>
        <div>RBP: {selectedMotif}</div>
      </div>
      <div className="viewer">
        <GeneViz
          geneData={SeqData[selectedGene] ? SeqData[selectedGene] : {}}
          GeneName={selectedGene}
          selectedAreaType={selectedAreaType}
          selectedAreaName={selectedMotif}
        ></GeneViz>
      </div>
    </div>
  );
}

export default App;
