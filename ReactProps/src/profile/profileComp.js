import React from "react";
import PropTypes from "prop-types";

export const Infos = props => {
    return (
        <>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center" , color:"white", marginTop:"4vh"}}>
            <img src={props.children} alt="Kevin Mitnick" onClick={() => props.handleName(`Current User : ${props.fullName}`)} style={{width:"20vw", borderRadius:"50%", boxShadow:"0px 0px 20px white" }}/>
            <h1>Full Name : {props.fullName} </h1>
            <h2 style={{textAlign:"center", width:"50vw"}}>Bio : {props.bio} </h2>
            <h2>Profession : {props.profession} </h2>
        </div>
        </>
    );
}

Infos.defaultProps = {
    fullName: "16",
    bio: "Empty Bio",
    profession: "No Profession",
    children: "#"
};

Infos.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    children: PropTypes.string
};