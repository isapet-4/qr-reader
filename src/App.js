import logo from './logo.svg';
import './App.css';

function App() {


let code = "";

document.addEventListener('keypress', e => {
  //usually scanners throw an 'Enter' key at the end of read
  if (e.key === "Enter") {
    
            /// code ready to use          
            document.getElementById("second").innerHTML = code
      
            code = "";
    } else {
        code += e.key; //while this is not an 'enter' it stores the every key            
        document.getElementById("first").innerHTML = code
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
        <div>{code}</div>

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
