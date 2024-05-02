function TextInput({ text, textSetter, labelName }) {
  // Handle change in text input
  const handleTextChange = (event) => {
    console.log(event.target.value);
    textSetter(event.target.value);
  };

  return (
    <>
      <label htmlFor={labelName}>{labelName}</label>
      <input
        type="text"
        value={text}
        id={labelName}
        onChange={handleTextChange}
        placeholder=""
      />
    </>
  );
}

function TypeSwitch({ type, setType }) {
  // Function to toggle between Linear and Circular
  const toggleShape = () => {
    setType((currentType) =>
      currentType === "linear" ? "circular" : "linear"
    );
  };

  return (
    <div>
      {/* Label and Switch */}
      <label htmlFor="shapeSwitch">Current Shape: {type}</label>
      <input
        type="checkbox"
        id="shapeSwitch"
        checked={type === "circular"}
        onChange={toggleShape}
        style={{ marginLeft: "10px" }}
      />
    </div>
  );
}

function ControllerMan({
  RNAname,
  setRNAname,
  RNAseq,
  setRNAseq,
  RNAtype,
  setRNAtype,
  motifs,
  setmotifs,
}) {
  return (
    <>
      <TextInput
        text={RNAname}
        textSetter={setRNAname}
        labelName="RNAname"
      ></TextInput>
      <TextInput
        text={RNAseq}
        textSetter={setRNAseq}
        labelName="RNAseq"
      ></TextInput>
      <TypeSwitch type={RNAtype} setType={setRNAtype}></TypeSwitch>
    </>
  );
}

export default ControllerMan;
