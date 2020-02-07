import React from "react";
import languageContext from "../contexts/languageContext";

class Button extends React.Component {
  renderSubmit(value) {
    return value === "english" ? "Submit" : "Gửi đi";
  }

  render() {
    return (
      <button className="ui button primary">
        <languageContext.Consumer>
          {value => this.renderSubmit(value)}
        </languageContext.Consumer>
      </button>
    );
  }
}

export default Button;
