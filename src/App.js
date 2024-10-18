import logo from './logo.svg';
import './App.css';

function App() {
  on_scanner() // init function
let testValue = ''
let testValue1= ''
  function on_scanner() {
      let is_event = false; // for check just one event declaration
      let input = document.getElementById("scanner");
      input?.addEventListener("focus", function () {
          if (!is_event) {
              is_event = true;
              input.addEventListener("keypress", function (e) {
                  setTimeout(function () {
                      if (e.key === 13) {
                          testValue= input.value
                          scanner(input.value); // use value as you need
                          input.select();
                      }
                  }, 500)
              })
          }
      });
      document.addEventListener("keypress", function (e) {
          if (e.target.tagName !== "INPUT") {
              input.focus();
          }
      });
  }
  
  function scanner(value) {
      if (value === '') return;
      console.log(value)
      testValue1 = value
  }

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
        <p>code: {testValue}</p>
        <p>code 1 {testValue1}</p>


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
