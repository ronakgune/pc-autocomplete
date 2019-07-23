import React from "react";
import ReactDOM from "react-dom";
import "./styles/Styles.css";

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      showResults: false,
      name: [],
      url: [],
      type: [],
      radio: "all"
    };
  }

  // Handle Input from text box
  onTextChanged = e => {
    const { items } = this.props;
    const value = e.target.value;
    let suggestionsAll = [];
    let suggestions = [];
    if (value.length > 0) {
      const { radio } = this.state;
      const regex = new RegExp(`^${value}`, "gi");
      if (radio === "all") {
        suggestionsAll = items.products
          .sort()
          .filter(v => regex.test(v.name) && v.type);
        suggestions = suggestionsAll.slice(0, 7);
      } else if (radio === "bank") {
        suggestionsAll = items.products
          .sort()
          .filter(v => regex.test(v.name) && v.type === "BANK")
          .slice(1, 8);
        suggestions = suggestionsAll.slice(0, 7);
      } else if (radio === "credit_card") {
        suggestionsAll = items.products
          .sort()
          .filter(v => regex.test(v.name) && v.type === "CREDIT_CARD");
        suggestions = suggestionsAll.slice(0, 7);
      } else if (radio === "investment") {
        suggestionsAll = items.products
          .sort()
          .filter(v => regex.test(v.name) && v.type === "INVESTMENT");
        suggestions = suggestionsAll.slice(0, 7);
      } else if (radio === "loan") {
        suggestionsAll = items.products
          .sort()
          .filter(v => regex.test(v.name) && v.type === "LOAN");
        suggestions = suggestionsAll.slice(0, 7);
      } else if (radio === "mortgage") {
        suggestionsAll = items.products
          .sort()
          .filter(v => regex.test(v.name) && v.type === "MORTGAGE");
        suggestions = suggestionsAll.slice(0, 7);
      }
    }

    this.setState({ suggestions, text: value, showResults: false });
  };

  // Get value of selected suggestion
  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: []
    }));
  }

  // Handle Suggestions
  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions === 0) {
      return null;
    }
    return (
      //<ul>
      <div>
        {suggestions.map(item => (
          <ul>
            <li onClick={() => this.displayData(item)}>
              <a href={item.url} target="_blank">
                {item.name}{" "}
              </a>
              {/* <li>{item.url}</li> */}
            </li>
          </ul>
        ))}
        {/* </ul> */}
      </div>
    );
  }

  // Set the current state accoring to the text input
  displayData(value) {
    this.setState(() => ({
      name: value.name,
      url: value.url,
      type: value.type,
      suggestions: [],
      showResults: true
    }));
  }

  // Checks which radio button is selected and changes state
  onRadioChanged = e => {
    const value = e.target.value;
    console.log(value);
    this.setState(() => ({
      radio: value,
      suggestions: []
    }));
  };

  // Can be used to display the data if needed
  renderResults() {
    const { name } = this.state;
    const { url } = this.state;
    const { type } = this.state;

    return (
      <div id="results" className="search-results">
        <ul>
          <li>{name}</li>
          <li>{url}</li>
          <li>{type}</li>
        </ul>
      </div>
    );
  }

  render() {
    const { name } = this.state;
    return (
      <div className="MainWrapper">
        <input
          name="radio1"
          type="radio"
          className="MainWrapperInput"
          value="all"
          onChange={this.onRadioChanged}
          checked={this.state.radio1}
          defaultChecked
        />{" "}
        <label>All</label>
        <input
          name="radio1"
          type="radio"
          className="MainWrapperInput"
          value="bank"
          onChange={this.onRadioChanged}
          checked={this.state.radio1}
        />{" "}
        <label>Bank </label>
        <input
          name="radio1"
          type="radio"
          className="MainWrapperInput"
          value="credit_card"
          onChange={this.onRadioChanged}
          checked={this.state.radio1}
        />{" "}
        <label>Credit Card </label>
        <input
          name="radio1"
          type="radio"
          className="MainWrapperInput"
          value="investment"
          onChange={this.onRadioChanged}
          checked={this.state.radio1}
        />{" "}
        <label>Investment </label>
        <input
          name="radio1"
          type="radio"
          className="MainWrapperInput"
          value="loan"
          onChange={this.onRadioChanged}
          checked={this.state.radio1}
        />{" "}
        <label>Loan </label>
        <input
          name="radio1"
          type="radio"
          className="MainWrapperInput"
          value="mortgage"
          onChange={this.onRadioChanged}
          checked={this.state.radio1}
        />{" "}
        <label>Mortgage </label>
        <div className="AutoCompleteText">
          <input
            type="text"
            onChange={this.onTextChanged}
            placeholder="Enter Institution Name"
          />
          {this.renderSuggestions()}
        </div>
        {/* <div>{this.state.showResults ? this.renderResults() : null}</div> */}
      </div>
    );
  }
}

export default AutoComplete;
