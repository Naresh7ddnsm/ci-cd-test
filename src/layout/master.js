import React from "react";
import Header from "./../components/header/header"


const Master = props => {
    return(
        <>
            <Header />
            {props.children}
        </>
    )
}

export default Master;