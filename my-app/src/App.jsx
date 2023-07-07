import { useState } from 'react'


import './App.css'
import Navbar from './Components/Navbar/Navbar'
import FirstMain from './Components/Content-Main/FirstMain'
import SecMain from './Components/Content-Main/SecMain'
import ThirdMain from './Components/Content-Main/ThirdMain'
import FourthMain from './Components/Content-Main/FourthMain'
import FifthMain from './Components/Content-Main/FifthMain'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
   <FirstMain/>
    <SecMain/>
    <ThirdMain/>
    <FourthMain/>
    <FifthMain/>
    </>
  )
}

export default App

 

