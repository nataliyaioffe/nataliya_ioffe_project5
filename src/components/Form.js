import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div id="form-section">
        <div className="wrapper">
          <h1>The Sorting Hat</h1>
          <div className="icons-container">
            <img
              src={require("../assets/Gryffindor.svg")}
              alt="House crest for Gryffindor, represented by a Lion."
            />
            <img
              src={require("../assets/Ravenclaw.svg")}
              alt="House crest for Ravenclaw, represented by a Raven."
            />
            <img
              src={require("../assets/Hufflepuff.svg")}
              alt="House crest for Hufflepuff, represented by a Badger."
            />
            <img
              src={require("../assets/Slytherin.svg")}
              alt="House crest for Gryffindor, represented by a Snake."
            />
          </div>
          <form onSubmit={this.props.handleSubmit} action="" action="">
            <div className="input-container">
              <label className="visuallyhidden" htmlFor="">
                Full Name
              </label>
              <input
                required
                placeholder="Your Full Name Here"
                onChange={this.props.handleChange}
                id="userName"
                type="text"
                value={this.props.userName}
              />
              <input type="submit" value="Get Sorted" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
