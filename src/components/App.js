import React from "react";
import UserCreate from "./userCreate";
import languageContext from "../contexts/languageContext";
import colorContext from "../contexts/colorContext";
import LanguageSelector from "./languageSelector";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { language: "english" };
    this.onLanguageChange = this.onLanguageChange.bind(this);
  }

  onLanguageChange(language) {
    this.setState({ language });
  }

  render() {
    return (
      <div className="ui container">
        <LanguageSelector onLanguageChange={this.onLanguageChange} />
        <colorContext.Provider value="red">
          <languageContext.Provider value={this.state.language}>
            <UserCreate />
          </languageContext.Provider>
        </colorContext.Provider>
      </div>
    );
  }
}

export default App;
