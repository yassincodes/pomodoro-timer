import React, {useContext, useState} from "react"
import {Context} from "./Context"
function Footer() {
  const {other, appMode, setAppMode} = useContext(Context)

  function handleMode() {
    window.location.reload()
    window.scrollTo(0, 0)
    if (appMode === "normal") {
      setAppMode("test")
    } else {
      setAppMode("normal")
    }
  }

  return (
      <>
       <div className="footer" style={{borderTop: "3px solid" + other, backgroundRepeat:"no-repeat", backgroundSize:"100% 100%"}}> 
         <div><h3>pomodoro timer features</h3></div>
         <div>
          <ul>
           <li>customize the look of the web app as you want</li>
           <br />
           <li>number of pomos and working hours is stored in local storage</li>
           <br />
           <li>there are notification sound 😁</li>
           <br />
           <li>after each 25 minutes of work you'll get a 5 minutes of rest</li>
           <br />
           <li>after 4 pomos you'll get 15 minutes of rest</li>
           <br />
           <li>sounds confusing ? try the app in test mode:
                in test mode, the timer will be 5s/1s/3s,
                this will help you understand better how the app functions,
                note that you'll loose you're statics and you'll start seeing
                fake ones! ready to try [emoji]
                <br />
                <button onClick={handleMode}>{(appMode == "normal") ? "run test mode" : "back to nromal mode"}</button>
           </li>
          </ul>
         </div>
       </div>
      </>
  )  
}

export default Footer