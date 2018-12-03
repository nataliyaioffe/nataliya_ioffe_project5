import React, { Component } from "react";

class Form extends Component {
    render() {
        return (
            <div id="form-section">
                <div className="wrapper">
                    <div className="form-container">
                    <h1>The Sorting Hat</h1>
                        <div className="icons-container">
                            <img src={require("../assets/Gryffindor.svg")} alt="" />
                            <img src={require("../assets/Ravenclaw.svg")} alt="" />
                            <img src={require("../assets/Hufflepuff.svg")} alt="" />
                            <img src={require("../assets/Slytherin.svg")} alt="" />
                        </div>
                        <form onSubmit={this.props.handleSubmit} action="" action="">
                            <div className="input-container">
                                <label className="visuallyhidden" htmlFor="">Full Name</label>
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
            </div>
        )
    }
}


export default Form