import logo from './logo.svg';
import './App.css';
import {BarcodeScanner} from "@itexperts/barcode-scanner";

function App() {
  let options = {
    timeOut: 130,
    characterCount: 13
  }
  let barcode = ''
  let barcodeScanner = new BarcodeScanner(options);
  barcodeScanner.addEventListener('scan', function(e){
      document.getElementById("second").innerHTML = e.detail
      alert(e.detail)
      barcode = e.detail;
      console.log(barcode);
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
          <br/>
          {/* <h2>UPC is: </h2>
          <input defaultValue={UPC}/>
          <p>upc: {UPC}</p>

          <h2>code: </h2>
          <input defaultValue={code}/> */}
        <input type="text" id="scanner" placeholder="scanner" defaultValue={barcode}></input>
        <div id="first"></div>
        <div id="second">barcode: {barcode}</div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
