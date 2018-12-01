import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import firebase from './firebase';
import Form from "./Form";
import Dashboard from "./Dashboard";

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
      userName: "",
      userHouseName:"",
      fourHouses: [],
      currentPage: "form", // OR DASHBOARD PAGE
      whichHouse: "",
      allUsers: {},
      // gryffindorHouse: [],
      // hufflepuffHouse: [],
      // ravenclawHouse: [],
      // slytherinHouse: [],
      loading: false,
    }
  };

  componentDidMount() {
    // attach event listener to firebase

    dbRef.on("value", (snapshot) => {
      // console.log(snapshot.val());
      this.setState({
        allUsers: snapshot.val()
      })
    })

  //   dbRefGryffindor.on("value", (snapshot) => {
  //     this.setState({
  //     gryffindorHouse: snapshot.val()
  //   }
  // })
  //   dbRefHufflepuff.on("value", (snapshot) => {
  //     this.setState({
  //       hufflepuffHouse: snapshot.val()
  //     // hufflepuffHouse: Object.entries(snapshot.val())
  //   })
  // })
  //   dbRefRavenclaw.on("value", (snapshot) => {
  //     this.setState({
  //     ravenclawHouse: snapshot.val()
  //   })
  // })
  //   dbRefSlytherin.on("value", (snapshot) => {
  //     this.setState({
  //     slytherinHouse: snapshot.val()
  //     })
  // })

}

  // ON USER TYPING IN INPUT FIELD
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  // ON SUBMIT
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    axios({
      method: 'GET',
      url: `https://www.potterapi.com/v1/houses/`,
      dataResponse: 'json',
      params: {
        key: `$2a$10$CaX1E1nDUX97buGbZ2MtC.00UEZBnHDu0KdWmAOZopX/AD2AtIBFK`
      }
    }).then(async (res) => {
      const fourHouses = res.data;

      this.shuffle(fourHouses)
      const userHouseName = fourHouses[0].name;

      await this.setState({
        fourHouses: fourHouses,
        userHouseName: userHouseName,
      })

      // let animation = this.state.rubberBand;
      // animation = true;

      this.setState({
        currentPage: 'dashboard',
        loading: false,
        rubberBand: true
      })

      const newSubmission = {
        userName: this.state.userName,
        userHouseName: this.state.userHouseName
      }

      if (this.state.userHouseName === "Gryffindor") {
        dbRefGryffindor.push(newSubmission)
      } else if (this.state.userHouseName === "Slytherin") {
        dbRefSlytherin.push(newSubmission)
      } else if (this.state.userHouseName === "Ravenclaw") {
        dbRefRavenclaw.push(newSubmission)
      } else {
        dbRefHufflepuff.push(newSubmission)
      }

    })}

  shuffle = function(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  render() {
    //can also do this step in state. 
    const foundHouse = this.state.fourHouses.find((house) => house.name === this.state.userHouseName);
    return (
      <main>
        {/* {this.state.loading && <h2> I'M LOADING </h2>} */}
       {this.state.currentPage === "form" ?
          (<Form 
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                userName={this.state.userName}
             />)
          :
          (<Dashboard 
              houseInformation={foundHouse}
              userName={this.state.userName}
              userHouseName={this.state.userHouseName}
              allUsers={this.state.allUsers}
            />)
        }
      </main>
    )
  };
};

export default App;


