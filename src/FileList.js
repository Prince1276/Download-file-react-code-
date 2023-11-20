import React from 'react';

const FileList = ({ filesArray, downloadFile }) => {
  return (
    <div>
      {filesArray.map((file, i) => (
        <div key={i}>
          <p style={{ color: "black" }} onClick={() => downloadFile(file.ipfs)}>{file.fileName}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default FileList;
