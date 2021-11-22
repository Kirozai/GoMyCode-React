import React from "react";
let profilePhotoSrc =  prompt("Please input the link to your profile photo :");
const Profilephoto = () => {
    while (profilePhotoSrc === "") {
        alert('Empty Link ❌');
        profilePhotoSrc =  prompt("Please input the link to your profile photo :");
    }
    return <img src={profilePhotoSrc} alt="profile pic"></img>
};
export default Profilephoto;