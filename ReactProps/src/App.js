import React from "react";
import { Infos } from "./profile/profileComp";
import "./App.css";

const App = () => {
  const handleName = x => alert(x);
  return (
    <>
      <Infos fullName="Kevin Mitnick" bio="American computer security consultant, author, and convicted hacker. He is best known for his high-profile 1995 arrest and five years in prison for various computer and communications-related crimes." profession="Hacker" handleName={handleName}>https://upload.wikimedia.org/wikipedia/commons/4/41/Kevin_Mitnick_2008.jpeg</Infos>
    </>
  );
};
export default App;
