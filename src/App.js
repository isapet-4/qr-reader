import logo from './logo.svg';
import './App.css';

function App() {
  document.addEventListener('keydown', (ev) => {
    if (ev.ctrlKey || ev.altKey) return;  // Ignore command-like keys
    if (ev.key === 13) {
      // ...submit the content here...
    } else if (ev.key === 'Space') { // I think IE needs this
      document.getElementById('scanner').value += ev.key;
      document.getElementById('first').innerHTML += ' ';
      document.getElementById('second').innerHTML += ' ';
    } else if (ev.key.length === 1) { // A character not a key like F12 or Backspace
      document.getElementById('scanner').value += ev.key;
      document.getElementById('first').innerHTML += ev.key;
      document.getElementById('second').innerHTML += ev.key;
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
        <div id="first"></div>
        <div id="second"></div>


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
