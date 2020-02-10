import React, { Component } from "react";
import LanguageContext from "../contexts/languageContext";

class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag vn"
          onClick={() => this.context.onLanguageChange("vietnamese")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
