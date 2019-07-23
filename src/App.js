import React from "react";
import "./styles/App.css";
import AutoComplete from "./AutoComplete.js";
import products from "./data/products.json";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-Component">
          <AutoComplete items={products} />
        </div>
      </div>
    );
  }
}

export default App;
