import React from "react";
import UserCreate from "./userCreate";
import languageContext from "../contexts/languageContext";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag vn"
            onClick={() => this.onLanguageChange("vietnamese")}
          />
        </div>
        <languageContext.Provider value={this.state.language}>
          <UserCreate />
        </languageContext.Provider>
      </div>
    );
  }
}

export default App;
