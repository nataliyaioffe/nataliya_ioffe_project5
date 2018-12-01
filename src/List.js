import React, { Component } from "react";


class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return( 
            <div className="house-list">
                <ul className={this.props.house}>
                    {Object.keys(this.props.users).map(user => {

                        const userInfo = this.props.users[user]

                        return (
                        <li key={user}>{userInfo.userName}</li> // << -- key of object
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default List