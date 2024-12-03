// väga sarnane Redux - see on lihtsalt keerulisematele lahendustele


// Context ja Redux teevad sama asja

import { createContext, useState} from 'react';


// --> provideri kaudu määran globaalsust 
// kus neid muutujaid ja funktsionaalsusi näha saan
export const AuthContext = createContext();


// --> provideri kaudu määran globaalsust
// kus neid muutujaid ja funktsionaalsusi näha saan
export const AuthContextProvider = ({children}) => {

    const [loggedIn, setLoggedIn] = useState(determineIfLoggedIn());
 
    function determineIfLoggedIn() {
        // if (sessionStorage.getItem("token") === "suvaline-token-mida-tegelikult-väljastab-back-end") {
        //     return true;
        // } else {
        //     return false;
        // }
        return sessionStorage.getItem("token") === "suvaline-token-mida-tegelikult-väljastab-back-end";
    }

    return (
    <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
        {children}
    </AuthContext.Provider>
    )
}