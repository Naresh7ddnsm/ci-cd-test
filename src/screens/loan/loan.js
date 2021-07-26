import React from "react";
import Master from "./../../layout/master";
import ApplyLoan from "./../../components/applyLoan/applyLoan";

const Loan = props => {
    return( 
        <Master>
            <h1>Apply Loan</h1>
            <ApplyLoan />
        </Master>        
    )
}

export default Loan;