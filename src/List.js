import React, { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return( 
            <div className="house-list">
                <div className="house-name">
                    <h2>{this.props.house}</h2>
                </div>
                <ul className={this.props.house}>
                    {Object.keys(this.props.users).map(user => {
                        const userInfo = this.props.users[user]
                        return (
                          <li key={user}>{userInfo.userName}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default List


{/* {Object.entries(this.props.users).map(item => {
        return (
            <li key={item[0]}>{item[1].userName}</li>
        )
    })} */}