import React, { Component } from "react";


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        // const { houseInformation } = this.props;
        return (
            <div>
                <div className="main-content">
                <h1>My House is {this.props.houseInformation.name}</h1>
                <h2>My head of house is {this.props.houseInformation.headOfHouse}</h2>
                </div>
            </div>
        )
    }
}


export default Dashboard