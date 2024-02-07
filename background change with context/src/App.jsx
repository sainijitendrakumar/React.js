import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeContextProvider } from './context/themeContext'


function App() {
  const[themeMode,setThemeMode]=useState()

  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }

  useEffect(()=>{
    document.querySelector("html").classList.remove("light","dark")
    document.querySelector("html").classList.add(themeMode)
  },[themeMode])
  

  return (
    <ThemeContextProvider value={{themeMode,darkTheme,lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>
                    <div className="w-full max-w-sm mx-auto my-5 ">
              <Card />
           </div>
                </div>
            </div>
    </ThemeContextProvider>
  )
}

export default App
