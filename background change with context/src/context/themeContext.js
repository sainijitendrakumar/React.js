import React, { createContext, useContext } from "react";


const ThemeContext = createContext({
    themMode : "light",
    lightTheme:()=>{},
    darkTheme:()=>{}
})

export const ThemeContextProvider=ThemeContext.Provider

const useTheme=()=>{
   return useContext(ThemeContext)
}

export default useTheme