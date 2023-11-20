import React, { useState } from 'react';

const App = () => {
  const [filesArray, setFilesArray] = useState([
    { fileName: 'Document 1', ipfs: 'https://ipfs.moralis.io:2053/ipfs/QmPT1rThfbvcVkg298iK6jF2xZJXV8RYeQ5oQ5YoqcL6XN/contract/agreement.pdf' },
    { fileName: 'Document 2', ipfs: 'https://ipfs.moralis.io:2053/ipfs/QmPT1rThfbvcVkg298iK6jF2xZJXV8RYeQ5oQ5YoqcL6XN/contract/agreement.pdf' },
    
  ]);

  const downloadFile = async (fileUrl) => {
    console.log(fileUrl);
    if (fileUrl && fileUrl !== '') {
      try {
        const response = await fetch(fileUrl);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
        link.click();
      } catch (error) {
        console.error('Error downloading file:', error);
      }
    }
  };

  return (
    <div>
      <h1>PDF Files</h1>
      {filesArray.map((file, i) => (
        <div key={i}>
          <p style={{ color: "black" }} onClick={() => downloadFile(file.ipfs)}>{file.fileName}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default App;
