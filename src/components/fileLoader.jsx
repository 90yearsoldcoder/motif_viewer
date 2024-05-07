import PropTypes from "prop-types";
import buttons from "../styles/Buttons.module.css";
import { useState } from "react";

const JsonFileLoader = ({ setSeqData }) => {
  const [fileName, setFileName] = useState(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = JSON.parse(e.target.result);
        setSeqData(content);
        //console.log(file.name);
        setFileName(file.name);
      } catch (error) {
        console.error("Error parsing JSON file:", error);
        setSeqData(null);
      }
    };
    reader.readAsText(file);
  };

  /* debug block */
  /*  
  useEffect(() => {
    console.log(SeqData); // Log the updated value of SeqData
  }, [SeqData]);
  */

  return (
    <div>
      <label
        htmlFor="fileInput"
        className={`${buttons.button} ${buttons.primary}`}
      >
        {fileName ? fileName : "Choose File"}
      </label>
      <input
        id="fileInput"
        type="file"
        accept=".json"
        className={buttons.input_file}
        onChange={handleFileChange}
      />
    </div>
  );
};

JsonFileLoader.propTypes = {
  setSeqData: PropTypes.func.isRequired,
};

export default JsonFileLoader;
