import React, { Component } from "react";

class Form extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit} action="" action="">
                    <div className="input-container">
                        <label htmlFor="">First Name</label>
                        <input
                            onChange={this.props.handleChange}
                            id="userName"
                            type="text"
                            value={this.props.userName} />
                        <input type="submit" value="Get Sorted" />
                    </div>
                </form>
            </div>
        )
    }
}


export default Form