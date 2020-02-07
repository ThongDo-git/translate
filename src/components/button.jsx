import React from "react";
import languageContext from "../contexts/languageContext";

class Button extends React.Component {
  static contextType = languageContext;

  render() {
    const text = this.context === "english" ? "Submit" : "Gửi đi";
    return <button className="ui button primary">{text}</button>;
  }
}

export default Button;
