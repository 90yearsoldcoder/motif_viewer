const JsonFileLoader = (SeqData, setSeqData) => {
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = JSON.parse(e.target.result);
        setSeqData(content);
      } catch (error) {
        console.error("Error parsing JSON file:", error);
        setSeqData(null);
      }
    };
    reader.readAsText(file);
    console.log(SeqData);
  };

  return (
    <div>
      <input type="file" accept=".json" onChange={handleFileChange} />
    </div>
  );
};

export default JsonFileLoader;
