import React, { Component } from "react";
import List from "./List";
import { type } from "os";
import date from "./date";

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        console.log(this.props.allUsers);
        const lowerCaseHouseName = this.props.houseInformation.name.toLowerCase();
        return (
            <section className="dashboard">
                <div className="wrapper">
                    <div className="main-dash">
                        <div className="user-info">
                            <p className="user-name">Welcome, {this.props.userName}</p>
                            <p>Today's date is {date}</p>
                        </div>
                        <div className="spells">
                            <h3>Spell of the Day</h3>
                            <p className="spell">{this.props.spellName}</p>
                            <p className="spell-effect">{this.props.spellEffect}</p>
                        </div> 
                    </div>
                    <div className="house-details">
                        <img src={require("../assets/" + this.props.houseInformation.name + ".svg")} alt=""/>
                        <h2>About Your House</h2>
                        <div className="details-container">
                            <div className="detail-item">
                                <span className="detail-head">Head of House</span>
                                <p>{this.props.houseInformation.headOfHouse}</p>
                            </div>
                            <div className="detail-item">
                                <span className="detail-head">Founder</span>
                                <p>{this.props.houseInformation.founder}</p>
                            </div>
                            <div className="detail-item">
                                <span className="detail-head">Head Ghost</span>
                                <p>{this.props.houseInformation.houseGhost}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <List
                    houseName={this.props.houseInformation.name}
                    users={this.props.allUsers[lowerCaseHouseName]} />
            </section>                     
        )
    }
}


export default Dashboard