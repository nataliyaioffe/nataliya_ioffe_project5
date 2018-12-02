import React, { Component } from "react";
import Dashboard from "./Dashboard";


class SortResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "sortResult"
        }
    }

    handleClick = (event) => {
        console.log("THIS WORKS");
        this.setState({
            currentPage: "dashboard",
            loading: false,
        })
    }

    render() {
        return (
            <div>
                {this.state.currentPage === "sortResult" ?
                (
                    <div>
                        <p>{this.props.userName}, you've been sorted into {this.props.userHouseName}!</p>
                        <button onClick={this.handleClick}>House Dashboard ></button>
                    </div>
                )
                :
                (
                    <Dashboard 
                        houseInformation={this.props.houseInformation}
                        userName={this.props.userName}
                        userHouseName={this.props.userHouseName}
                        allUsers={this.props.allUsers} />
                )
                }
            </div>
        )
    }
}


export default SortResult



// {
//     this.state.currentPage === "form" ?
//     (<Form
//         handleSubmit={this.handleSubmit}
//         handleChange={this.handleChange}
//         userName={this.state.userName}
//     />)
//     :

//     (