import React, { Component } from "react";
import firebase from "./firebase";
import axios from "axios";
import {
  withRouter,
  Redirect
} from "react-router-dom";
import PropTypes from 'prop-types';

const dbRef = firebase.database().ref();
const dbRefGryffindor = firebase.database().ref("/gryffindor");
const dbRefSlytherin = firebase.database().ref("/slytherin");
const dbRefHufflepuff = firebase.database().ref("/hufflepuff");
const dbRefRavenclaw = firebase.database().ref("/ravenclaw");

class Form extends Component {
  constructor(props) {
    super(props);
  }

  // ON SUBMIT
  handleSubmit = event => {
    event.preventDefault();
    this.props.doAxios();
  };

  render() {

    return (
      <div id="form-section">
        <div className="wrapper">
          <h1>The Sorting Hat</h1>
          <div className="icons-container">
            <img
              src={require("../assets/Gryffindor.svg")}
              alt="House crest for Gryffindor, represented by a Lion."
            />
            <img
              src={require("../assets/Ravenclaw.svg")}
              alt="House crest for Ravenclaw, represented by a Raven."
            />
            <img
              src={require("../assets/Hufflepuff.svg")}
              alt="House crest for Hufflepuff, represented by a Badger."
            />
            <img
              src={require("../assets/Slytherin.svg")}
              alt="House crest for Gryffindor, represented by a Snake."
            />
          </div>
          <form onSubmit={this.handleSubmit} action="" action="">
            <div className="input-container">
              <label className="visuallyhidden" htmlFor="">
                Full Name
              </label>
              <input
                required
                placeholder="Your Full Name Here"
                onChange={this.props.handleChange}
                id="userName"
                type="text"
                value={this.userName}
              />
              <input type="submit" value="Get Sorted" />
            </div>
          </form>
        </div>

        {this.props.shouldRedirect && <Redirect to="/sortresult" /> }
      </div>
    );
  }
}

Form.propTypes = {
  shouldRedirect: PropTypes.bool.isRequired,
  doAxios: PropTypes.func.isRequired
};

export default withRouter(Form);








// render() {
//   return (
//     <div id="form-section">
//       <div className="wrapper">
//         <h1>The Sorting Hat</h1>
//         <div className="icons-container">
//           <img
//             src={require("../assets/Gryffindor.svg")}
//             alt="House crest for Gryffindor, represented by a Lion."
//           />
//           <img
//             src={require("../assets/Ravenclaw.svg")}
//             alt="House crest for Ravenclaw, represented by a Raven."
//           />
//           <img
//             src={require("../assets/Hufflepuff.svg")}
//             alt="House crest for Hufflepuff, represented by a Badger."
//           />
//           <img
//             src={require("../assets/Slytherin.svg")}
//             alt="House crest for Gryffindor, represented by a Snake."
//           />
//         </div>
//         <form onSubmit={this.props.handleSubmit} action="" action="">
//           <div className="input-container">
//             <label className="visuallyhidden" htmlFor="">
//               Full Name
//               </label>
//             <input
//               required
//               placeholder="Your Full Name Here"
//               onChange={this.props.handleChange}
//               id="userName"
//               type="text"
//               value={this.props.userName}
//             />
//             <input type="submit" value="Get Sorted" />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
// }

// export default Form;