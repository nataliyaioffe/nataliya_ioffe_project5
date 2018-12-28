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

    return <section id={this.props.userHouseName}>
        <header>
          <div className="wrapper">
            <h1 data-aos="zoom-out" data-aos-duration="5000">
              {this.props.userHouseName}
            </h1>
            {/* <div className="user-info">
                  <p className="user-name">Welcome, {this.props.userName}</p>
                  <p>Today's date is {date}</p>
              </div> */}
            {/* <div className="spells">
                <h2>Featured Spell</h2>
                <p className="spell">{this.props.spellName}</p>
                <p className="spell-effect">{this.props.spellEffect}</p>
            </div>  */}
            {/* </div> */}
          </div>
        </header>
        <div className="house-details">
          <div className="detail">
            <div className="wrapper">
              <h2 data-aos="fade-up-right">House Founder</h2>
              <p data-aos="fade-up-left">
                {this.props.houseInformation.founder}
              </p>
            </div>
          </div>
          <div className="detail">
            <div className="wrapper">
              <h2 data-aos="fade-up-left">Head of House</h2>
              <p data-aos="fade-up-right">
                {this.props.houseInformation.headOfHouse}
              </p>
            </div>
          </div>
          <div className="detail">
            <div className="wrapper">
              <h2 data-aos="fade-up-right">House Ghost</h2>
              <p data-aos="fade-up-left">
                {this.props.houseInformation.houseGhost}
              </p>
            </div>
          </div>
        </div>
        <List houseName={this.props.houseInformation.name} users={this.props.allUsers[lowerCaseHouseName]} />
      </section>;
  }
}

export default Dashboard;
