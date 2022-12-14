import React, { createContext, useState } from 'react'
import {auth} from "../auth/firebase"
import {onAuthStateChanged} from "firebase/auth"

export const UserContext = createContext();
const UserProvider = ({children}) => {

const[user,setUser] = useState({});

 onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
    })

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider;
