import React, { useState, useEffect } from "react";
import "./App.css";

class App extends React.Component {
  state = {
    Person:  {
      fullName: "My name's Bond.. James Bond",
      bio: "0: Kill Auth 0: Murder Confirmed 7: 7th to receive kill auth",
      imgSrc: "https://www.fjackets.com/uk/product_images/n/568/James_Bond_SPECTRE_Double_breasted_coat__68577_zoom.JPG",
      profession: "-007"
    },
    Activity: false
  };
  handleClick = () => this.state.Activity === false ? this.setState({Activity: true}) : this.setState({Activity: false});
  componentDidMount(){
    setInterval(() => {this.setState({counter:new Date().toString()})},1000)
  }
  render() {
    if ( this.state.Activity === true ) {
      return (
        <>
          <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"10vh auto", backgroundColor:"#121212", width:"25vw", color:"white", textAlign:"center", borderRadius:"15px"}}>
            <button onClick={this.handleClick} style={{marginTop:"5vh"}}>Show State</button>
            <img src={this.state.Person.imgSrc} alt="" style={{width:"15vw", paddingTop:"5vh"}}/>
            <p>{this.state.Person.fullName}</p>
            <p>{this.state.Person.bio}</p>
            <p>{this.state.Person.profession}</p>
            <h5>{this.state.counter}</h5>
          </div>
        </>
      )
    } else {
      return (
        <>
          <button onClick={this.handleClick} style={{margin:"20vh auto", display:"block", fontSize:"50px"}}>Show State</button>
        </>
      )
    }
  };
}


export default App;