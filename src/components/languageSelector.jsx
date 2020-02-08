import React, { Component } from "react";

class LanguageSelector extends Component {
  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.props.onLanguageChange("english")}
        />
        <i
          className="flag vn"
          onClick={() => this.props.onLanguageChange("vietnamese")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
