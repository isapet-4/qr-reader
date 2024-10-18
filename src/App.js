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

let code = "";
let reading = false;

document.addEventListener('keypress', e => {
  //usually scanners throw an 'Enter' key at the end of read
   if (e.key === "ENTER") {
    document.getElementById("third").innerHTML = code
        //   if(code.length > 25) {
        //     console.log(code);
        //     /// code ready to use          
        //     document.getElementById("second").innerHTML = code
      
        //     code = "";
        //  }
    } else {
        code += e.key; //while this is not an 'enter' it stores the every key            
        document.getElementById("first").innerHTML = code
    }

    //run a timeout of 200ms at the first read and clear everything
    // if(!reading) {
    //     reading = true;
    //     setTimeout(() => {
    //         code = "";
    //         reading = false;
    //     }, 200);  //200 works fine for me but you can adjust it
    // }
});


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
          <br/>
         
        <input type="text" id="scanner" placeholder="scanner"></input>
        <div id="first"></div>
        <div id="second"></div>
        <div id="third"></div>
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
