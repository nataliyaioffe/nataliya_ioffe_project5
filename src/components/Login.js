import React, { Component } from "react";

class Login extends Component {
    render() {
        const { logIn, guestLogin } = this.props;

        return (
        <section className="login">
            <div className="wrapper">
                <h1>The Sorting Hat</h1>
                <p>Please sign in to be sorted into your Harry Potter House. If you've previously been sorted, you will be directed to your House Dashboard. You may also continue as a Guest.</p>
                <button className="btn--login" onClick={logIn}>Login</button>
                <button className="btn--guest" onClick={guestLogin}>Guest Login</button>
            </div>
        </section>
        )
    }
}

export default Login;
