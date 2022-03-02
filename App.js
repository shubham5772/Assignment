import React from "react"
import Navbar from "./Navbar/Navbar"
import Home from "./Home"
import "./app.css"
const App = ()=>{

return(

  <div>
  <Navbar/>
  
  <h1 style={{textAlign:"center"}}>My Blog</h1>
  
  <Home/>
  </div>

)

}
export default App