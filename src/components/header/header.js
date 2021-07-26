import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import styled from "styled-components";
import {useSelector, useDispatch} from "react-redux";

import removeUser from "./../../actions/removeUser";

import loggedUser from "./../../selectors/logged_user" 

const Header = props => {
    const FluidContainer = styled.div`
        width: 100%;
        background: #dfdfdf;
        padding: 10px 0;
    `
    const Container = styled.div`
        max-width: 1200px;
        margin: auto;
    `
    const Navlist = styled.ul`
        list-style: none;
        display: flex;
    `
    const Navitem = styled.li`
        font-size: 16px;
        margin-right: 20px;
        cursor: pointer;
    `
    const dispatch = useDispatch();
    const [logged, setLogged] = useState(false)
    const user = useSelector(loggedUser);
    const history = useHistory();
    const logoutHandler = () => {
        dispatch(removeUser());
        history.push('/login')
    }
    useEffect(() => {
        Object.keys(user).length && setLogged(true)
    }, [user])

    return(
        <FluidContainer>
            <Container>
                <Navlist>
                    {!logged && <Navitem><Link to="/">Home</Link></Navitem>}
                    {!logged && <Navitem><Link to="/login">Login</Link></Navitem>}
                    {logged && <Navitem><Link to="/loans">Loans</Link></Navitem> }
                    {logged && <button onClick={logoutHandler}>Logout</button> }
                </Navlist>
            </Container>
        </FluidContainer>
    )
}

export default Header;