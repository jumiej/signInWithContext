import { createContext, useState } from "react";



export const SignInContext = createContext(); //

export const SignInProvider = ({children}) =>{
    const [Username, setUserName] = useState("");
    const [showProfile, setShowProfile] = useState("false")

    return (
        <SignInContext.Provider value={{Username,showProfile, setUserName, setShowProfile}}>
            {children}
         </SignInContext.Provider>   
    )

}