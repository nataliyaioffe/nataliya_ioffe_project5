import React, { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return( 
            <div className="wrapper">
                <div className="house-list">
                    <h2>Members</h2>
                    <ul className={this.props.houseName}>
                        {Object.keys(this.props.users).map(key => {
                            const userInfo = this.props.users[key]
                            return (
                            <li key={key}>{userInfo.userName}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default List