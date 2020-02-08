import React from "react";
import UserCreate from "./userCreate";
import LanguageContext from "../contexts/languageContext";
import ColorContext from "../contexts/colorContext";
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
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
