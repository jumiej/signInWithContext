import { SignIn } from "./component/SignIn";
import Profile from "./component/Profile";
import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import { SignInProvider } from "./Contexts/SignInContext";


function App() {
  return (
   <SignInProvider> 
   <Header />
   <div className="App">
     <Routes>
       <Route path="/" element={<SignIn />}> </Route>
       <Route path="Profile" element={<Profile />}> </Route>
     </Routes>  
   </div>
   </SignInProvider>
  );
}

export default App;
