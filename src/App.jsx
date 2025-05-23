import { useState } from "react";
import "./App.css";
import QRCode from "qrcode";

function App() {
  const [qrCodeImage, setQrCodeImage] = useState("");
  const [url, setUrl] = useState("");

  async function GenrateQRCode() {
    if (url === "") {
      setQrCodeImage("");
      alert("Enter Text of URL");
      return;
    }
    try {
      setQrCodeImage(await QRCode.toDataURL(url));
    } catch (error) {
      alert(error);
      return;
    }
  }

  return (
    <div className="App-container">
      <h1>Genrate QR Code</h1>
      <div className="Input-Btn-Container">
        <input
          type="text"
          placeholder="Enter Text or URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={GenrateQRCode}>Generate</button>
      </div>
      {qrCodeImage && (
        <div className="Qr-Code-Container" style={{ marginTop: "1rem" }}>
          <a href={qrCodeImage} download="qrcode.png">
            <button className="button">Download</button>
          </a>
          <img className="Qr-Code-Image" src={qrCodeImage} alt="QR Code" />
          <br />
        </div>
      )}
    </div>
  );
}

export default App;
