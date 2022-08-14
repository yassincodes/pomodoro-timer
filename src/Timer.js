import React, {useContext, useState} from "react"
import PomodoroTimer from "./Timer_section/PomodoroTimer"
import ShortBreack from "./Timer_section/ShortBreack"
import LongBreack from "./Timer_section/LongBreack"
import {Context} from "./Context"

function Timer() {
    const {other, trackingNumber, setTrackingNumber, handleBackground} = useContext(Context)
    handleBackground(trackingNumber)
    const design = {
        borderRadius: "10px",
        background:other,
        cursor: "pointer",
        color:"white",
        padding:"10px"
    }
    return (
        <>
         <div className="timer">
          <div onClick={() => setTrackingNumber(1)} style={trackingNumber === 1 ? design : {}}>work time</div>
          <div onClick={() => setTrackingNumber(2)} style={trackingNumber === 2 ? design : {}}>short breack</div>
          <div onClick={() => setTrackingNumber(3)} style={trackingNumber === 3 ? design : {}}>long breack</div>
         </div>
         <div>
          {trackingNumber === 1 && <PomodoroTimer />}
          {trackingNumber === 2 && <ShortBreack />}
          {trackingNumber === 3 && <LongBreack />}
         </div>
        </>
    )
}

export default Timer