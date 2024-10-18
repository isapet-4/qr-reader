import logo from './logo.svg';
import './App.css';

function App() {


let code = "";

document.addEventListener('keypress', e => {
  if (e.key === "Enter") {
            document.getElementById("third").innerHTML = code
            code = "";
    } else {
        code += e.key;             
    }
});


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
          <br/>
         
        first: <div id="first" ></div>
        second: <div id="second"></div>
        third: <div id="third"></div>
        div: <div>{code}</div>

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
