import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import { SignIn } from "./component/SignIn";
import Profile from "./component/Profile";
// import { useState } from "react";


function App() {

  // const [showProfile, setShowProfile] = useState("false")
  return (
   <> 
   <Header />
   <div className="App">
     <Routes>
       <Route path="/" element={<SignIn />}> </Route>
       <Route path="Profile" element={<Profile />}> </Route>
     </Routes>  
   </div>
   </>
  );
}

export default App;
