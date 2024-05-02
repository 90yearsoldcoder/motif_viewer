import { SeqViz } from "seqviz";

const GeneViz = ({ RNAname, RNAseq, RNAtype, motifs }) => (
  <SeqViz
    name={RNAname}
    seq={RNAseq}
    viewer={RNAtype}
    showComplement={false}
    zoom={{ linear: 80 }}
    annotations={motifs}
  />
);

export default GeneViz;
