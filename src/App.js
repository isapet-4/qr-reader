import logo from './logo.svg';
import './App.css';

function App() {
  let UPC = '';
    document.addEventListener("keydown", function(e) {
        const textInput = e.key || String.fromCharCode(e.key);
        const targetName = e.target.localName;
        let newUPC = '';
        if (textInput && targetName !== 'input'){
            newUPC = UPC+textInput;

          if (newUPC.length >= 6) {
            console.log('barcode scanned:  ', newUPC);
          } 
       }
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          code is: <input defaultValue={UPC}/>
        </p>
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
