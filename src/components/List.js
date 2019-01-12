import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="house-list">
      <div className="wrapper">
        <h2 data-aos="fade-in" data-aos-easing="linear">
          Members
        </h2>
        <ul className={this.props.houseName}>
          {Object.keys(this.props.users).map((key, i) => {
            console.log("key", key);

            const userInfo = this.props.users[key];
            console.log(userInfo);
            return <li data-aos="fade-in" key={key}>
                {userInfo.userName}
              </li>;
          })}
        </ul>
      </div>
    </div>;
  }
}

export default List;
