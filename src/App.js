
// PSEUDO CODE

// 0
// import axios
// import firebase
// Call to HP API

// 1
// User enters name into form
// User name is stored in Firebase

// 2
// User clicks sorting hat button
// User is sorted into random house (of 4)
// House page is populated with house info
// house page has "house members" button which shows members of house

// user submits form
// capture name of user & put into component state
// api request for random house
// when results come back put house info in state

// houses list will be array of all userobjects  (which includes house/name)



import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import firebase from './firebase';
import Form from "./Form";

// reference to the root of the database
const dbRef = firebase.database().ref();
const dbRefGryffindor = firebase.database().ref("/gryffindor");
const dbRefSlytherin = firebase.database().ref("/slytherin");
const dbRefHufflepuff = firebase.database().ref("/hufflepuff");
const dbRefRavenclaw = firebase.database().ref("/ravenclaw");

class App extends Component {
  constructor() {
    super();
    this.state = {
      // userNameTracker: "",
      userName: "",
      userHouse:"",
      currentPage: "form", // OR RESULTS PAGE
      gryffindorHouse: [],
      hufflepuffHouse: [],
      ravenclawHouse: [],
      slytherinHouse: []
    }
  };

  componentDidMount() {
    console.log("compontent did mount");
    // attach event listener to firebase
    dbRefGryffindor.on("value", (snapshot) => {
      this.setState({
      gryffindorHouse: snapshot.val()
    })
  })
    dbRefHufflepuff.on("value", (snapshot) => {
      this.setState({
        hufflepuffHouse: snapshot.val()
      // hufflepuffHouse: Object.entries(snapshot.val())
    })
  })
    dbRefRavenclaw.on("value", (snapshot) => {
      this.setState({
      ravenclawHouse: snapshot.val()
    })
  })
    dbRefSlytherin.on("value", (snapshot) => {
      this.setState({
      slytherinHouse: snapshot.val()
      })
  })
}

// convert snapshot object into array
// update houselist to that array

// {Object.entries(this.state.bookList).map((book) => {

// components:
// 1 form 
// 2 results page


  // ON USER TYPING IN INPUT FIELD
  handleChange = (event) => {
    console.log(event);
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  // ON SUBMIT
  handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: 'GET',
      url: `https://www.potterapi.com/v1/houses/`,
      dataResponse: 'json',
      params: {
        key: `$2a$10$CaX1E1nDUX97buGbZ2MtC.00UEZBnHDu0KdWmAOZopX/AD2AtIBFK`
      }
    }).then((res) => {
      const fourHouses = res.data;
      this.shuffle(fourHouses)
      const userHouse = fourHouses[0].name;
      console.log(fourHouses);

      // headOfHouse
      // houseGhost
      // mascot
      // values
      // members <---- will come from another endpoint

      
      this.setState({
        userHouse: userHouse,
        currentPage: "dashboard"
      })

      const newSubmission = {
        userName: this.state.userName,
        userHouse: this.state.userHouse
      }

      if (this.state.userHouse === "Gryffindor") {
        dbRefGryffindor.push(newSubmission)
      }
      if (this.state.userHouse === "Slytherin") {
        dbRefSlytherin.push(newSubmission)
      }
      if (this.state.userHouse === "Ravenclaw") {
        dbRefRavenclaw.push(newSubmission)
      }
      if (this.state.userHouse === "Hufflepuff") {
        dbRefHufflepuff.push(newSubmission)
      }

      // console.log(newSubmission);
      
    })}



  shuffle = function(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
    
  render() {
    return (
      <main>
        <div className="wrapper">
        {this.state.currentPage === "form" ? 
          (<div className="main-content">
            <h1>Harry Potter Thingy</h1>
            {/* form.props.handlsubmit = this.handlesubmit */}
             <Form 
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                userName={this.state.userName}
             />

            </div>)
          :
          (<div className="main-content">
            {this.state.userName}
            {this.state.userHouse}
          </div>)
        }

            {/* if there's a value in username/housename state, do this h1 */}
            {/* {this.state.userName ? <h1>{this.state.userName}, {this.state.userHouse}</h1> : false} */}
          </div>
      </main>
    )
  };
};

export default App;


