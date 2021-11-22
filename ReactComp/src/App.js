import React from "react";
import Profilephoto from "./Component/Profile/ProfilePhoto";
import Fullname from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
import "./App.css";

const App = () => {
  return (
    <>
    <div className="container">
      <Profilephoto/>
      <div className="container2">
        <Fullname/>
        <Address/>
      </div>
    </div>
    </>
  );
};
export default App;
