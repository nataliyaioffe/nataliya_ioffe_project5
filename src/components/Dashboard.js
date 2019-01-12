import React, { Component } from "react";
import List from "./List";
import { type } from "os";
import date from "./date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import firebase from "./firebase";
import { Redirect } from 'react-router-dom';

const dbRef = firebase.database().ref();
const dbRefGryffindor = firebase.database().ref("/gryffindor");
const dbRefSlytherin = firebase.database().ref("/slytherin");
const dbRefHufflepuff = firebase.database().ref("/hufflepuff");
const dbRefRavenclaw = firebase.database().ref("/ravenclaw");

const defaultState = {
  gryffindor: {},
  slytherin: {},
  hufflepuff: {},
  ravenclaw: {}
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // if there is no data, redirect home
    if (!this.props.userHouseName) {
      return <Redirect to ='/' />;
    }

    const houseInformation = this.props.fourHouses.find(house => house.name === this.props.userHouseName);
    const lowerCaseHouseName = houseInformation.name.toLowerCase();

    return <section id={this.props.userHouseName}>
        <header>
          <div className="wrapper">
            <h1 data-aos="fade-down" data-aos-duration="5000">
              {this.props.userHouseName}
            </h1>
          <FontAwesomeIcon className="arrow-down" data-aos="fade-up" data-aos-duration="5000" data-aos-delay="8000" icon={faArrowDown} />
          </div>
        </header>
        <div className="house-details">
          <div className="detail">
            <div className="wrapper">
              <h2 data-aos="fade-up-right">House Founder</h2>
              <p data-aos="fade-up-left">
                {this.props.userHouseFounder}
              </p>
            </div>
          </div>
          <div className="detail">
            <div className="wrapper">
              <h2 data-aos="fade-up-left">Head of House</h2>
              <p data-aos="fade-up-right">
                {this.props.userHeadOfHouse}
              </p>
            </div>
          </div>
          <div className="detail">
            <div className="wrapper">
              <h2 data-aos="fade-up-right">House Ghost</h2>
              <p data-aos="fade-up-left">
                {this.props.userHouseGhost}
              </p>
            </div>
          </div>
        </div>
        <List houseName={this.props.userHouseNanme} users={this.props.allUsers[lowerCaseHouseName]} />
      </section>;
  }
}

export default Dashboard;



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