import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import ContactUserCard from "./Components/ContactUserCard";
import Contacts from "./Components/Contacts";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";

function App() {
  return (
    <>
    <NavBar/>
    <ContactUserCard/>
    <Contacts/>
    <Posts/>
    <UserProfile/>
    </>
  )
}

export default App;
