import React, { Component } from "react";
import List from "./List";

const houses = ["gryffindor", "ravenclaw", "hufflepuff", "slytherin"];

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // const { houseInformation } = this.props;
        return (
            <section id={this.props.userHouseName}>
                <section className="user-house-dash">
                    <div className="wrapper">
                        <p>{this.props.userName}, you're a {this.props.houseInformation.name}!</p>
                        <p>{this.props.houseInformation.headOfHouse}</p>
                        <p>Values: {this.props.houseInformation.values}</p>
                        <p>Colors: {this.props.houseInformation.colors}</p>
                    </div>
                </section>
                <section className="master-house-lists">
                    {houses.map((house, i) => 
                        <List 
                            key={i}
                            house={house}
                            users={this.props.allUsers[house]} />
                    )}
                </section>                        
            </section>                    
        )
    }
}


export default Dashboard