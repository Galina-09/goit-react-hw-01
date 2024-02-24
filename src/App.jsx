import { useState } from "react";
import Profile from "./components/Profile/Profile";
import "./App.css";
import userData from "../src/userData.json";
console.log(userData);
const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};

export default App;
