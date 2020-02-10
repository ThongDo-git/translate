import React from "react";
import UserCreate from "./userCreate";
import { LanguageStore } from "../contexts/languageContext";
import ColorContext from "../contexts/colorContext";
import LanguageSelector from "./languageSelector";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
