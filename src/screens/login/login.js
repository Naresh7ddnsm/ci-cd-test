import React from "react";

import Master from "./../../layout/master";
import Login from "./../../components/login/login"

const LoginPage = props => {
    return (
        <Master>
            <h1>Login</h1>
            <Login />
        </Master>
    )
}

export default LoginPage;