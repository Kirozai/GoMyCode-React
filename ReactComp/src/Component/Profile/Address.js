import React from "react";
let address =  prompt("Please input your address :");
const Address = () => {
    while (address === "") {
        alert('Empty Address ❌');
        address =  prompt("Please input your address :");
    }
    return <h2>{address}</h2>
};
export default Address;