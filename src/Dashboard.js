import React, { Component } from "react";
import List from "./List";

const houses = ["gryffindor", "ravenclaw", "hufflepuff", "slytherin"];

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { houseInformation } = this.props;
        return (
            <section id={this.props.userHouseName}>
                <div className="wrapper">
                    <div className="main-content">
                        <aside>
                            <img src={require("./assets/" + this.props.userHouseName + ".svg")} alt=""/>
                            <p>{this.props.userName} </p>
                            <p>{houseInformation.name}</p>
                            <p>{houseInformation.headOfHouse}</p>
                            <p>Values: {houseInformation.values}</p>
                            <p>Colors: {houseInformation.colors}</p>
                        </aside>

                            {houses.map(house => 
                                <List house={house}
                                    users={this.props.allUsers[house]} />
                            )}
                            
                    </div>
                </div>
                <div>
                    
                </div>
            </section>
        )
    }
}


export default Dashboard