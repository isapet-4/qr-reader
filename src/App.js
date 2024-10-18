import logo from './logo.svg';
import './App.css';

function App() {
  document.addEventListener('keydown', (ev) => {
    if (ev.ctrlKey || ev.altKey) return;  // Ignore command-like keys
    if (ev.key === 'Enter') {
      // ...submit the content here...
    } else if (ev.key === 'Space') { // I think IE needs this
      document.getElementById('scanner').value += ev.key;
      document.getElementById('first').value += ' ';
      document.getElementById('second').value += ' ';
    } else if (ev.key.length === 1) { // A character not a key like F12 or Backspace
      document.getElementById('scanner').value += ev.key;
      document.getElementById('first').value += ev.key;
      document.getElementById('second').value += ev.key;
    }
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
        <input type="text" id="scanner" placeholder="scanner"></input>
        <p id="first">code: </p>
        <p id="second">code 1 </p>


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
