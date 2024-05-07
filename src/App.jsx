import { useState } from "react";
import GeneViz from "./components/gene";
import "./App.css";
import ControllerMan from "./components/manualController";
import JsonFileLoader from "./components/fileLoader";

function App() {
  const [RNAname, setRNAname] = useState("Gene1");
  const [RNAseq, setRNAseq] = useState(
    "tcgcgcgtttcggtgatgacggtgaaaacctctgacacatgcatcgcgcgtttcggtgatgacggtgaaaacctctgacacatgca"
  );
  const [RNAtype, setRNAtype] = useState("linear");
  const [motifs, setmotifs] = useState([
    { name: "motif1", start: 28, end: 34, direction: 1, color: "#FED9B7" },
    { name: "motif2", start: 7, end: 17, direction: 1, color: "blue" },
    { name: "motif3", start: 15, end: 22, direction: 1, color: "blue" },
    { name: "motif4", start: 70, end: 78, direction: 1, color: "#F07167" },
  ]);
  const [SeqData, setSeqData] = useState({});

  return (
    <div className="main">
      <div className="sideBar">
        <JsonFileLoader
          SeqData={SeqData}
          setSeqData={setSeqData}
        ></JsonFileLoader>
        <ControllerMan
          RNAname={RNAname}
          setRNAname={setRNAname}
          RNAseq={RNAseq}
          setRNAseq={setRNAseq}
          RNAtype={RNAtype}
          setRNAtype={setRNAtype}
          motifs={motifs}
          setmotifs={setmotifs}
        ></ControllerMan>
      </div>
      <div className="viewer">
        <GeneViz
          RNAname={RNAname}
          RNAseq={RNAseq}
          RNAtype={RNAtype}
          motifs={motifs}
        ></GeneViz>
      </div>
    </div>
  );
}

export default App;
