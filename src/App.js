// background transition
// useReducer

import React, {useContext} from "react"
import Header from "./Header"
import Timer from "./Timer"
import Footer from "./Footer"
import {Context} from "./Context"
function App() {
    const {background, other} = useContext(Context)

    return (
        <div className="app" style={{height:"200vh", background:`${background}`, borderBottom:`${other}`, borderColor:`${other}`}}>
           <Header />
           <Timer />
           <Footer />
        </div>
    )
}

export default App