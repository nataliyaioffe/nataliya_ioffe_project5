import React, { Component } from "react";

class Form extends Component {
    render() {
        return (
        <section id="form-section">
            <div className="wrapper">
                <div className="form-container">
                <h1>Harry Potter THing</h1>
                    <form onSubmit={this.props.handleSubmit} action="" action="">
                        <div className="input-container">
                            <label className="visuallyhidden" htmlFor="">Full Name</label>
                            <input
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
        </section>
        )
    }
}


export default Form