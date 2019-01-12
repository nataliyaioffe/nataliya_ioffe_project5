import React, { Component } from "react";
import "./styles/App.css";
import axios from "axios";
import firebase from "./components/firebase";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import SortResult from "./components/SortResult";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

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

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      userHouseName: "",
      userHouseFounder: "",
      userHeadOfHouse: "",
      userHouseGhost: "", 
      allUsers: {},
      fourHouses: [],
      shouldRedirectToResults: false,
    };
  }

  // FIREBASE SNAPSHOT
  componentDidMount() {
    dbRef.on("value", snapshot => {
      console.log('Firebase updated');
      console.log(snapshot.val());
      this.setState({
        allUsers: { ...defaultState, ...snapshot.val() }
      });
    });
  }

  // ON USER TYPING IN INPUT FIELD
  handleChange = event => {
    console.log("handling change");
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  doAxios = () => {
    // HOUSES
    axios({
      method: "GET",
      url: `https://www.potterapi.com/v1/houses/`,
      dataResponse: "json",
      params: {
        key: `$2a$10$CaX1E1nDUX97buGbZ2MtC.00UEZBnHDu0KdWmAOZopX/AD2AtIBFK`
      },
    }).then(async res => {
      const fourHouses = res.data;
      this.shuffle(fourHouses);
      const userHouseName = fourHouses[0].name;
      const userHouseFounder = fourHouses[0].founder;
      const userHeadOfHouse = fourHouses[0].headOfHouse;
      const userHouseGhost = fourHouses[0].houseGhost;

      await this.setState({
        fourHouses: fourHouses,
        userHouseName: userHouseName,
        userHouseFounder: userHouseFounder,
        userHeadOfHouse: userHeadOfHouse,
        userHouseGhost: userHouseGhost,
        shouldRedirectToResults: true,
      });

      const newStudent = {
        userName: this.state.userName,
        userHouseName: this.state.userHouseName
      };

      if (this.state.userHouseName === "Gryffindor") {
        dbRefGryffindor.push(newStudent);
      } else if (this.state.userHouseName === "Slytherin") {
        dbRefSlytherin.push(newStudent);
      } else if (this.state.userHouseName === "Ravenclaw") {
        dbRefRavenclaw.push(newStudent);
      } else {
        dbRefHufflepuff.push(newStudent);
      }
    });
  };

  shuffle = function(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  render() {
    AOS.init({
      duration: 1300,
      delay: 200
    });

    return (
      <Router>
        <main>
          <Route
            exact
            path="/"
            render={() => 
              <Form 
                doAxios={this.doAxios} 
                handleChange={this.handleChange}
                shouldRedirect={this.state.shouldRedirectToResults}
              />
            }
          />
          <Route
            path="/sortresult/"
            render={() => (
              <SortResult
                userName={this.state.userName}
                userHouseName={this.state.userHouseName}
                spellName={this.state.spellName}
                spellType={this.state.spellType}
                spellEffect={this.state.spellEffect}
              />
            )}
          />
          <Route
            path="/dashboard/"
            render={() => (
              <Dashboard
                // houseInformation={houseInformation}
                fourHouses={this.state.fourHouses}
                allUsers={this.state.allUsers}
                userName={this.state.userName}
                userHouseName={this.state.userHouseName}
                userHouseFounder={this.state.userHouseFounder}
                userHeadOfHouse={this.state.userHeadOfHouse}
                userHouseGhost={this.state.userHouseGhost}
              />
            )}
          />
        </main>
      </Router>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import './styles/App.css';
// import axios from 'axios';
// import firebase from "./components/firebase";
// import Form from "./components/Form";
// // import Dashboard from "./Dashboard";
// import SortResult from "./components/SortResult";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const dbRef = firebase.database().ref();
// const dbRefGryffindor = firebase.database().ref("/gryffindor");
// const dbRefSlytherin = firebase.database().ref("/slytherin");
// const dbRefHufflepuff = firebase.database().ref("/hufflepuff");
// const dbRefRavenclaw = firebase.database().ref("/ravenclaw");

// const defaultState = {
//   gryffindor: {},
//   slytherin: {},
//   hufflepuff: {},
//   ravenclaw: {},
// }

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       userName: "",
//       userHouseName: "",
//       fourHouses: [],
//       spellsArray: [],
//       currentPage: "form", // OR DASHBOARD // SORT RESULT
//       allUsers: {},
//       loading: false,
//     }
//   };

//   componentDidMount() {
//     dbRef.on("value", (snapshot) => {
//       this.setState({
//         allUsers: { ...defaultState, ...snapshot.val() }
//       })
//     })
//   }

//   // ON USER TYPING IN INPUT FIELD
//   handleChange = (event) => {
//     this.setState({
//       [event.target.id]: event.target.value
//     })
//   }

//   // ON SUBMIT
//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.setState({ loading: true });
//     this.doAxios();
//   }

//   doAxios = () => {
//     // SPELLS
//     axios({
//       method: 'GET',
//       url: `https://www.potterapi.com/v1/spells/`,
//       dataResponse: 'json',
//       params: {
//         key: `$2a$10$CaX1E1nDUX97buGbZ2MtC.00UEZBnHDu0KdWmAOZopX/AD2AtIBFK`
//       }
//     }).then(async (res) => {
//       const spellsArray = res.data;
//       this.shuffle(spellsArray);
//       const spellName = spellsArray[0].spell;
//       const spellType = spellsArray[0].type;
//       const spellEffect = spellsArray[0].effect;

//       await this.setState({
//         spellName: spellName,
//         spellType: spellType,
//         spellEffect: spellEffect
//       })
//     })

//     // HOUSES
//     axios({
//       method: 'GET',
//       url: `https://www.potterapi.com/v1/houses/`,
//       dataResponse: 'json',
//       params: {
//         key: `$2a$10$CaX1E1nDUX97buGbZ2MtC.00UEZBnHDu0KdWmAOZopX/AD2AtIBFK`
//       }
//     }).then(async (res) => {
//       const fourHouses = res.data;

//       this.shuffle(fourHouses)
//       const userHouseName = fourHouses[0].name;

//       await this.setState({
//         fourHouses: fourHouses,
//         userHouseName: userHouseName,
//       })

//       this.setState({
//         currentPage: "sortResult",
//         loading: false
//       })

//       const newStudent = {
//         userName: this.state.userName,
//         userHouseName: this.state.userHouseName
//       }

//       if (this.state.userHouseName === "Gryffindor") {
//         dbRefGryffindor.push(newStudent)
//       } else if (this.state.userHouseName === "Slytherin") {
//         dbRefSlytherin.push(newStudent)
//       } else if (this.state.userHouseName === "Ravenclaw") {
//         dbRefRavenclaw.push(newStudent)
//       } else {
//         dbRefHufflepuff.push(newStudent)
//       }
//     })
//   }

//   shuffle = function (array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   }

//   render() {
//     AOS.init({
//       duration: 1300,
//       delay: 200
//     })
//     const houseInformation = this.state.fourHouses.find((house) => house.name === this.state.userHouseName);
//     return (
//       <main>
//         {/* {this.state.loading && <h2> I'M LOADING </h2>} */}
//         {this.state.currentPage === "form" ?
//           (<Form
//             handleSubmit={this.handleSubmit}
//             handleChange={this.handleChange}
//             userName={this.state.userName}
//           />)
//           :
//           (
//             <SortResult
//               houseInformation={houseInformation}
//               userName={this.state.userName}
//               userHouseName={this.state.userHouseName}
//               allUsers={this.state.allUsers}
//               spellName={this.state.spellName}
//               spellType={this.state.spellType}
//               spellEffect={this.state.spellEffect} />
//           )
//         }
//       </main>
//     )
//   };
// };

// export default App;
