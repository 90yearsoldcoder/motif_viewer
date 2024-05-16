import { useState } from "react";
import GeneViz from "./components/gene";
import "./App.css";
import JsonFileLoader from "./components/fileLoader";
import GeneList from "./components/geneList";
import MotifList from "./components/motifList";
import MetaPanel from "./components/metaPanel";
import TypeSelector from "./components/typeSelector";

function App() {
  /* Dev block */
  const [SeqData, setSeqData] = useState({});
  const [selectedGene, setSelectedGene] = useState("");
  const [selectedMotif, setSelectedMotif] = useState("");
  const [metaData, setMetaData] = useState({
    name: "",
    start: 0,
    end: 0,
    length: 0,
  });
  //const [selectedAreaType, setSelectedAreaType] = useState("motifs");
  const [selectedAreaType, setSelectedAreaType] = useState("motifs");

  return (
    <div className="main">
      <div className="sideBar">
        <JsonFileLoader
          SeqData={SeqData}
          setSeqData={setSeqData}
        ></JsonFileLoader>
        <TypeSelector
          selectedAreaType={selectedAreaType}
          setSelectedAreaType={setSelectedAreaType}
        ></TypeSelector>
        <GeneList
          geneData={SeqData}
          selectedGene={selectedGene}
          setSelectedGene={setSelectedGene}
        ></GeneList>
        <MotifList
          selectedAreaType={selectedAreaType}
          motifsData={
            SeqData[selectedGene]
              ? SeqData[selectedGene][selectedAreaType]
              : null
          }
          selectedMotif={selectedMotif}
          setSelectedMotif={setSelectedMotif}
        ></MotifList>
        <div>Gene: {selectedGene}</div>
        <div>RBP: {selectedMotif}</div>
      </div>
      <div className="viewer">
        <MetaPanel meta={metaData}></MetaPanel>
        <GeneViz
          geneData={SeqData[selectedGene] ? SeqData[selectedGene] : {}}
          GeneName={selectedGene}
          selectedAreaType={selectedAreaType}
          selectedAreaName={selectedMotif}
          setMetaData={setMetaData}
        ></GeneViz>
      </div>
    </div>
  );
}

export default App;
