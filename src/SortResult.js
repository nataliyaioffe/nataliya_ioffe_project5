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
        this.setState({
            currentPage: "dashboard",
        })
    }

    render() {
        
        return (
            <section id={this.props.userHouseName}>
                <div class="wrapper"> 
                    {this.state.currentPage === "sortResult" ?
                    (
                    <div className="sort-result">
                        <p>
                            <span class="name">{this.props.userName}...</span> 
                            You've been sorted into 
                            <span class="house">{this.props.userHouseName}</span>
                        </p>
                        <button onClick={this.handleClick}>View Dashboard</button>
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
            </section>
        )
    }
}


export default SortResult