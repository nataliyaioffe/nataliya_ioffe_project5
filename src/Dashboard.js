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
            <section className="dashboard">
                <div className="wrapper">
                    <div className="main-dash">
                        <div className="user-info">
                            <h1>{this.props.houseInformation.name}</h1>
                            <p className="user-name">{this.props.userName}</p>
                            {Date()}
                        </div>

                        <div className="dash-details">
                            <div className="house-details">
                                <h3>About {this.props.houseInformation.name}</h3>
                                <div className="detail-item">
                                    <span className="detail-head">Head of House:</span>
                                    <p>{this.props.houseInformation.headOfHouse}</p>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-head">Founder: </span>
                                    <p>{this.props.houseInformation.founder}</p>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-head">Head Ghost: </span>
                                    <p>{this.props.houseInformation.houseGhost}</p>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-head">House Values: </span>
                                    <p>{this.props.houseInformation.values}</p>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-head">Colors: </span>
                                    <p>{this.props.houseInformation.colors}</p>
                                </div>
                            </div>
                            
                            <div className="spell-of-day">
                                <h3>Spell of the Day</h3>
                                <p>{this.props.spellName}</p>
                                <p>{this.props.spellType}</p>
                                <p>{this.props.spellEffect}</p>
                            </div>                          

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
            </section>                     
        )
    }
}


export default Dashboard