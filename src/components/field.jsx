import React, { Component } from "react";
import languageContext from "../contexts/languageContext";

class Field extends Component {
  static contextType = languageContext;

  render() {
    const text = this.context === "english" ? "Name" : "Tên";
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
