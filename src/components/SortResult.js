import React, { Component } from "react";
import Dashboard from "./Dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { withRouter, Redirect } from "react-router-dom";

class SortResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "sortResult",
      anim1: false,
      anim2: false,
      anim3: false,
      anim4: false,
      shouldRedirectToDashboard: false,
    };
  }

  addAnimations = () => {
    setInterval(() => {
      this.setState({
        anim1: true
      });
    }, 0);

    setInterval(() => {
      this.setState({
        anim2: true
      });
    }, 2000);

    setInterval(() => {
      this.setState({
        anim3: true
      });
    }, 4500);

    setInterval(() => {
      this.setState({
        anim4: true
      });
    }, 6500);
  };

  componentDidMount() {
    this.addAnimations();
  }

  handleClick = event => {
    this.setState({
      shouldRedirectToDashboard: true,
    });
    this.props.history.push(`/dashboard/`);
  };

  render() {
    // if there is no data, redirect home
    if (!this.props.userHouseName) {
      return <Redirect to='/' />;
    }

    return (
      <section id="sort-page">
          <div className="sort-result">
            <p className={this.state.anim1 === true ? "anim1" : "hide"}>Hmm...</p>
            <p className={this.state.anim2 === true ? "anim2" : "hide"}>
              How about...
            </p>
            <p className={this.state.anim3 === true ? "anim3" : "hide"}>
              <span className={"result-house" + " " + this.props.userHouseName}>
                {this.props.userHouseName}
              </span>
            </p>
            <button
              className={this.state.anim4 === true ? "anim4" : "hide"}
              onClick={this.handleClick}
            >
              {" "}
              More About {this.props.userHouseName}
              <FontAwesomeIcon className="arrow-right" icon={faArrowRight} />
            </button>
          </div>

          { this.state.shouldRedirectToDashboard && <Redirect to="/dashboard" />}
      </section>
    )
  }
}

export default withRouter(SortResult);



















// import React, { Component } from "react";
// import Dashboard from "./Dashboard";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// class SortResult extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentPage: "sortResult",
//       anim1: false,
//       anim2: false,
//       anim3: false,
//       anim4: false
//     };
//   }

//   addAnimations = () => {
//     setInterval(() => {
//       this.setState({
//         anim1: true
//       });
//     }, 0);

//     setInterval(() => {
//       this.setState({
//         anim2: true
//       });
//     }, 2000);

//     setInterval(() => {
//       this.setState({
//         anim3: true
//       });
//     }, 4500);

//     setInterval(() => {
//       this.setState({
//         anim4: true
//       });
//     }, 6500);
//   };

//   componentDidMount() {
//     this.addAnimations();
//   }

//   handleClick = event => {
//     this.setState({
//       currentPage: "dashboard"
//     });
//   };

//   render() {
//     return (
//       <section id="sort-page">
//         {this.state.currentPage === "sortResult" ? (
//           <div className="sort-result">
//             <p className={this.state.anim1 === true ? "anim1" : "hide"}>Hmm...</p>
//             <p className={this.state.anim2 === true ? "anim2" : "hide"}>
//               How about...
//             </p>
//             <p className={this.state.anim3 === true ? "anim3" : "hide"}>
//               <span className={"result-house" + " " + this.props.userHouseName}>
//                 {this.props.userHouseName}
//               </span>
//             </p>
//             <button
//               className={this.state.anim4 === true ? "anim4" : "hide"}
//               onClick={this.handleClick}
//             >
//               {" "}
//               More About {this.props.userHouseName}
//               <FontAwesomeIcon className="arrow-right" icon={faArrowRight} />
//             </button>
//           </div>
//         ) : (
//             <Dashboard
//               houseInformation={this.props.houseInformation}
//               userName={this.props.userName}
//               userHouseName={this.props.userHouseName}
//               allUsers={this.props.allUsers}
//               spellName={this.props.spellName}
//               spellType={this.props.spellType}
//               spellEffect={this.props.spellEffect}
//             />
//           )}
//       </section>
//     );
//   }
// }

// export default SortResult;
