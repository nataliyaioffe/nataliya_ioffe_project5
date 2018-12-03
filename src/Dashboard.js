import React, { Component } from "react";
import List from "./List";
import { type } from "os";

// const houses = ["gryffindor", "ravenclaw", "hufflepuff", "slytherin"];

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // const { houseInformation } = this.props;
        console.log(this.props.allUsers);
        const lowerCaseHouseName = this.props.houseInformation.name.toLowerCase();
        // console.log(this.props.allUsers[lowerCaseName]);
        return (
            <div className="dashboard">
                <div className="user-house-dash">
                    <div className="wrapper">
                        <div className="">
                            <h1>{this.props.houseInformation.name}</h1>
                            <p>{this.props.userName}</p>
                            <p>{this.props.houseInformation.headOfHouse}</p>
                            <p>Values: {this.props.houseInformation.values}</p>
                            <p>Colors: {this.props.houseInformation.colors}</p>
                        </div>
                    </div>
                </div>

                <div className="master-house-lists">
                    <List
                        houseName={this.props.houseInformation.name}
                        users={this.props.allUsers[lowerCaseHouseName]} /> 
    
                    {/* {houses.map((house, i) =>
                        <List
                            key={i}
                            house={house}
                            users={this.props.allUsers[house]} />
                    )} */}
                 </div>   
            </div>                     
        )
    }
}


export default Dashboard