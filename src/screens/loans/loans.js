import React from "react";
import Master from "./../../layout/master";
import styled from "styled-components"
import {useSelector, useDispatch} from "react-redux";

import loans from "./../../selectors/loans";
import loggedUser from "./../../selectors/logged_user"

import updateLoan from "./../../actions/updateLoan";

const LoansPage = props => {

    const Container = styled.div`
        max-width: 1200px;
        margin: auto;
    `
    const Lists = styled.table`
        width: 100%;
    `

    const allLoans = useSelector(loans);
    const user = useSelector(loggedUser);
   
    const dispatch = useDispatch();

    const updateStatus = (id, type) => {
        const loan = allLoans.filter(loan => loan.id === id);
        if(type === "approve") {
            loan[0].status = "Approved"
        }
        if(type === "send") {
            loan[0].approval_stage = 1;
        }
        dispatch(updateLoan(loan[0]))
    }

    return(
        <Master>
            <Container>
            <h1>Loans</h1>
            <Lists>
                <thead>
                    <tr>
                        <td>S.No</td>
                        <td>Name</td>
                        <td>DOB</td>
                        <td>Loan Type</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
               </thead>
               <tbody>
                    { allLoans.length ? allLoans.map((loan, i) => {
                        
                        let link = 0;

                        link = (loan.approval_stage < 1 && loan.type.toLowerCase() === "individual") || loan.approval_stage > 0 && "Approve";

                        if((loan.approval_stage < 1 && loan.type.toLowerCase() === "individual") || loan.approval_stage > 0){
                            link = <button onClick={() => updateStatus(loan.id, "approve")}>Approve</button>
                        }

                        if((loan.approval_stage < 1 && loan.type.toLowerCase() === "corporate")){
                            link = <button onClick={() => updateStatus(loan.id, "send")}>Send to Manager approvel</button>
                        }

                        if(loan.status.toLowerCase() === "approved") {
                            link = ""
                        }
                        if(user.type.toLowerCase() === "agent"){
                            if(loan.approval_stage < 1 || (loan.approval_stage > 0 && loan.status.toLowerCase() === "approved")){
                                return <tr key={i}><td>{i+1}</td><td>{loan.firstname}</td><td>{loan.dob}</td><td>{loan.type}</td><td>{loan.status}</td><td>{link}</td></tr> 
                            }
                        } else {
                            if(loan.type.toLowerCase() === "corporate" && loan.approval_stage > 0){
                                return <tr key={i}><td>{i+1}</td><td>{loan.firstname}</td><td>{loan.dob}</td><td>{loan.type}</td><td>{loan.status}</td><td>{link}</td></tr>
                            }
                        }
                    
                    }) : <tr><td colSpan="6">No Lonas available</td></tr>}
               </tbody>
            </Lists>
            </Container>
        </Master>
    )
}

export default LoansPage;