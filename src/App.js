import logo from './logo.svg';
import './App.css';

function App() {
  document.addEventListener('textInput', function (e){
    if(e.data.length >= 6){
        console.log('IR scan textInput', e.data);
        document.getElementById("second").innerHTML = e.data
        document.getElementById("scanner").value = e.data
        e.preventDefault();
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
