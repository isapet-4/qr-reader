import logo from './logo.svg';
import './App.css';

function App() {
let code = "";
let reading = false;

document.addEventListener('keypress', e => {
  //usually scanners throw an 'Enter' key at the end of read
   if (e.key === 13) {
          if(code.length > 10) {
            console.log(code);
            /// code ready to use                
            code = "";
         }
    } else {
        code += e.key; //while this is not an 'enter' it stores the every key            
    }

    //run a timeout of 200ms at the first read and clear everything
    if(!reading) {
        reading = true;
        setTimeout(() => {
            code = "";
            reading = false;
        }, 200);  //200 works fine for me but you can adjust it
    }
});

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          code is: {code}
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
