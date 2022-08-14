import React, {useState, useEffect, useContext} from "react"
import {Context} from "../Context"
import sound_1 from "../App_sounds/sound_1.mp3";
import sound_2 from "../App_sounds/sound_2.mp3";
import sound_3 from "../App_sounds/sound_3.mp3";
import sound_4 from "../App_sounds/sound_4.mp3";
import sound_5 from "../App_sounds/sound_5.mp3";

function ShortBreack() {

  const {setTrackingNumber, other, selectedSound, appMode} = useContext(Context)

  // playing the audio
  const [playing, setPlaying] = useState(false);

  const [buttonName, setButtonName] = useState(false)
  function handleStart() {
       setButtonName(!buttonName)
  }

  let minutesNumber = 0
  let secondsNumber = 0
  if (appMode == "test") {
    minutesNumber = 0
    secondsNumber = 1
  } else {
    minutesNumber = 5
    secondsNumber = 0
  }

  const [minutes, setMinutes ] = useState(minutesNumber)
  const [seconds, setSeconds ] =  useState(secondsNumber)

    // the code that is responsible for notifications
    let audio = ''
    if (selectedSound == 1) {
      audio = new Audio(sound_1)
    } else if (selectedSound == 2) {
      audio = new Audio(sound_2)
    } else if (selectedSound == 3) {
      audio = new Audio(sound_3)
    } else if (selectedSound == 4) {
      audio = new Audio(sound_4)
    } else if (selectedSound == 5) {
      audio = new Audio(sound_5)
    }
    
  useEffect(()=>{
    if (buttonName) {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
            setSeconds(seconds - 1);
        }
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(myInterval)
                setButtonName(false)
                setSeconds(2)
                setTrackingNumber(1)
                setPlaying(!playing)
                audio.play()
            } else {
                setMinutes(minutes - 1);
                setSeconds(59);
            }
        } 
    }, 1000)
    return ()=> {
        clearInterval(myInterval);
      }
    }
  })
    return (
        <>
         <div className="short_breack">
         <div style={{background:`${other}`, borderColor:`${other}`, backgroundRepeat:"no-repeat", backgroundSize:"100% 100%"}} className="clock">
           { minutes === 0 && seconds === 0
            ? null
            : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
           }
           </div>
           <button className="pushable">
           <span className="front" style={{background:"white", color:other, backgroundRepeat:"no-repeat", backgroundSize:"100% 100%"}}  onClick={handleStart}>{buttonName ? "pause" : "start"}</span>
          </button>
         </div>
        </>
    )
}

export default ShortBreack