import React, {useRef} from "react";
import styled from "styled-components";
import {useHstory, useHistory} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import users from "./../../selectors/users";
import loggedUser from "./../../actions/addLoggedUser";

const Login = props => {
    const Container = styled.div`
        max-width: 1200px;
        margin: auto;
    `
    const Formgroup = styled.div`
        display: flex;
        flex-direction: column;
        max-width: 250px;
        text-align: left;
        margin-bottom: 25px;
    `
    const dispatch = useDispatch();
    const username = useRef();
    const password = useRef();
    const type = useRef();
    const history = useHistory();
    const allUsers = useSelector(users);
    const loginHandler = (e) => {
        e.preventDefault();
        const findUser = allUsers.filter(user => user.username === username.current.value && user.password === password.current.value);
        findUser.length > 0 && dispatch(loggedUser(findUser[0]));
        history.push("/loans")
    }
    return(
        <Container>
            <form type="post">
                <Formgroup>
                    <label>Firstname</label>
                    <input type="text" ref={username} name="username" />
                </Formgroup>
                <Formgroup>
                    <label>Password</label>
                    <input type="password" ref={password} name="password" />
                </Formgroup>
                <Formgroup>
                    <label>login Type</label>
                    <select ref={type}>
                        <option value="">Select Type</option>
                        <option value='agent'>Agent</option>
                        <option value='manager'>Manager</option>
                    </select>
                </Formgroup>
                <Formgroup>
                    <input type="button" onClick={(e) => loginHandler(e)}  value="submit" />
                </Formgroup>
                
            </form>
        </Container>
    )
}

export default Login;