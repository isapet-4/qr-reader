import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"



function App() {

  const [products, setProducts] = useState([])

  let keyCodes = ""

  document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      console.log(keyCodes)
      setProduct(keyCodes)
      keyCodes = ""
    } else {
      keyCodes += e.key
    }
  })

  const setProduct = (value) => {
    const [CustomerNumber, ProductId, ProductName, StorageName, Quantity] =
      value.trim().split("$")

    const product = {
      CustomerNumber: Number(CustomerNumber),
      ProductId,
      ProductName,
      StorageName,
      Quantity: Number(Quantity),
    }
    setProducts((previous) => [...previous, product])
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
          <br/>
         
        first: <div id="first" ></div>
        second: <div id="second"></div>
        third: <div id="third"></div>
        {products[0].ProductId}
        {products.map((product) => {
          return <p>{product.ProductId}</p>}
          )}
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
