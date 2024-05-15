import adjustColorByScore from "../functions/colorPanel";

//extract info according to the type of Area
const extractInfo = {
  motifs: (geneData, selectedAreaName) => {
    var targets = [];
    for (let target of geneData["motifs"]) {
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
    console.log(targets);
    return targets;
  },
};

export default extractInfo;
