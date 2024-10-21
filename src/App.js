import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import { groupBy } from "lodash"



function App() {

  const [products, setProducts] = useState([])

  let keyCodes = ""
  document.addEventListener("keypress", (e) => {
    console.log('keypress: ', e.key)
    document.getElementById("third").innerHTML = e.key
    if (e.key === "Enter") {
      setProduct(keyCodes)
      document.getElementById("first").innerHTML = keyCodes
      keyCodes = ""
    } else {
      keyCodes += e.key
    }
  })

  const setProduct = (value) => {
    console.log('log', value)
    const [CustomerNumber, ProductId, ProductName, StorageName, Quantity] =
      value.trim().split("$")
      

    const product = {
      CustomerNumber: Number(CustomerNumber),
      ProductId,
      ProductName,
      StorageName,
      Quantity: Number(Quantity),
    }
    console.log('product: ', product)
    setProducts((previous) => [...previous, product])
  }

  const groupedItems = groupBy(products, "CustomerNumber")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
          <br/>
         
        first: <div id="first" ></div>
        second: <div id="second"></div>
        third: <div id="third"></div>
         {Object.entries(groupedItems).map(([key, group]) => (
          <div key={key} >
            {group.map((item, itemKey) => (
              <div key={itemKey}>
                <div>
                  {item.ProductId}
                </div>
                <div>
                  {item.ProductName}
                </div>
                <div>
                  {item.Quantity}
                </div>
                <div>
                  {item.StorageName}
                </div>
              </div>
            ))}
            </div>
         ))}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => setProduct("1$333$te$dad$222")}>Click</button>
      </header>
    </div>
  );
}

export default App;
