import React, {useRef} from "react";
import styled from "styled-components";
import {v4 as uuidv4} from "uuid";
import addLoan from "./../../actions/addLoan";

import { useDispatch } from "react-redux";

const ApplyLoan = props => {
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
    const nameRef = useRef();
    const lastRef = useRef();
    const dobRef = useRef();
    const loanTypeRef = useRef();

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const lastname = lastRef.current.value;
        const dobVal = dobRef.current.value;
        const loantype = loanTypeRef.current.value;

        const loanData = {
            firstname: name,
			lastname: lastname,
			type: loantype,
			dob: dobVal,
			status: "Pending",
            approval_stage: 0,
            id: uuidv4()
        }
        dispatch(addLoan(loanData));
    }
    return(
        <Container>
            <form type="post">
                <Formgroup>
                    <label>Firstname</label>
                    <input type="text" ref={nameRef} name="firstname" />
                </Formgroup>
                <Formgroup>
                    <label>Lastname</label>
                    <input type="text" ref={lastRef} name="Lastname" />
                </Formgroup>
                <Formgroup>
                    <label>Date of Birth</label>
                    <input type="text" ref={dobRef} name="dob" />
                </Formgroup>
                <Formgroup>
                    <label>Loan Type</label>
                    <select ref={loanTypeRef}>
                        <option value="">Select Type</option>
                        <option value='individual'>Individual</option>
                        <option value='corporate'>Corporate</option>
                    </select>
                </Formgroup>
                <Formgroup>
                    <input type="button" value="submit" onClick={(e) => submitHandler(e)} />
                </Formgroup>

            </form>
        </Container>
    )
}

export default ApplyLoan;