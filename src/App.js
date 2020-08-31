import React, { useState } from 'react';
import './App.css';
import QRCode from 'qrcode.react';

function App() {

  const [url, setUrl] = useState('https://www.google.com.br');
  const [temp, setTemp] = useState('');

  const downloadQR = () => {
    const canvas = document.getElementById("QrCode");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "123456.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <>  
      <div className="grid grid-template gap">
        <div className="item title">
          <h1>QrCode Generator</h1>
        </div>
        <div className="item form">
          <label htmlFor="text">Texto para converter</label>
          <input type="text" name="text" id="url"onChange={e => setTemp(e.target.value)}/>
          <input type="button" value="QrCode" onClick={e => setUrl(temp)} />
        </div>
        <div className="item qrcode">
          <QRCode
            id="QrCode"
            value={url}
            size={300}
            level={"H"}
            includeMargin={true}
          />
          <input type="button" value="Download QrCode"onClick={downloadQR}/>
        </div>
      </div>
    </>
  );
}

export default App;
