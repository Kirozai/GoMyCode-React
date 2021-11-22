import React from "react";
let fullname =  prompt("Please input your full name :");
const Fullname = () => {
    while (fullname === "") {
        alert('Empty Name ❌');
        fullname =  prompt("Please input your full name :");
    }
    return <h1>{fullname}</h1>
};
export default Fullname;