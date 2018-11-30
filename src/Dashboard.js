import React, { Component } from "react";


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { houseInformation } = this.props;
        console.log(this.props.userHouseName);
        return (
            <div id={this.props.userHouseName}>
                <div>
                    <div className="main-content">
                    <p>User Name: {this.props.userName} </p>
                    <h1>House: {houseInformation.name}</h1>
                    <h2>Head of House: {houseInformation.headOfHouse}</h2>
                    <h2>Values: {houseInformation.values}</h2>
                    <h2>Values: {houseInformation.values}</h2>
                    <h2>Colors: {houseInformation.colors}</h2>
                    </div>
                </div>
            </div>
        )
    }
}


export default Dashboard