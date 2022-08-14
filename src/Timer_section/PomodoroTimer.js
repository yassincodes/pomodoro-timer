import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Context";
import { Animated } from "react-animated-css";
import sound_1 from "../App_sounds/sound_1.mp3";
import sound_2 from "../App_sounds/sound_2.mp3";
import sound_3 from "../App_sounds/sound_3.mp3";
import sound_4 from "../App_sounds/sound_4.mp3";
import sound_5 from "../App_sounds/sound_5.mp3";

function PomodoroTimer() {
  // getting data from context
  // data for setting the tracking number (pomodor === 1 / short === 2 / long === 3)
  // data for other (the styling)
  const { setTrackingNumber, other, selectedSound, selectedAnimation, appMode } = useContext(Context);

  // providing the user with info about wich pomodo is he working on
  const array = [
    "the first one",
    "the second one",
    "the third one",
    "the forth one",
  ];

  // the code that is responsible for the timer
  let minutesNumber = 0
  let secondsNumber = 0
  if (appMode == "test") {
    minutesNumber = 0
    secondsNumber = 5
  } else {
    minutesNumber = 25
    secondsNumber = 0
  }

  const [minutes, setMinutes ] = useState(minutesNumber)
  const [seconds, setSeconds ] =  useState(secondsNumber)

  // 3 states, one function, 3 changes
  //const [playing, setPlaying] = useState(false)

  // button name is for telling the program to start counting
  const [buttonName, setButtonName] = useState(false);

  // telling the to show the array of 4 infos or not
  const [pomoTrack, setPomoTrack] = useState(false);

  // the function that is responsible for starting the timer
  function handleStart() {
    setButtonName(!buttonName);
    setPomoTrack(true);
  }

  // getting the pomo
  let pomo = localStorage.getItem("pomo");

  // this section is responsible for the timer
  // if the timer reached the end
  // there is a function that will look for the pomo number
  // and set the trackingNumber according to the pomo number
  // example: if we have 4 pomo, then we should take the user
  // to the long break, that is why we should set the tracking number to 
  
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
  
    
  useEffect(() => {
    if (buttonName) {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
            setButtonName(false);
            setSeconds(3);
            audio.play();
            if (pomo) {
              if ((parseInt(pomo) + 1) % 4 == 0) {
                setTrackingNumber(3);
              } else {
                setTrackingNumber(2);
              }
            } else {
              setTrackingNumber(2);
            }
            pomo
              ? localStorage.setItem("pomo", parseInt(pomo) + 1)
              : localStorage.setItem("pomo", 1);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
      return () => {
        clearInterval(myInterval);
      };
    }
  });

  function animationType() {
    if (selectedAnimation == 1) {
      return "zoomInUp"
    } else if (selectedAnimation == 2) {
      return "bounceInLeft"
    } else if (selectedAnimation == 3) {
      return "bounceInRight"
    } else if (selectedAnimation == 4) {
      return "rollIn"
    } else if (selectedAnimation == 5) {
      return "rubberBand"
    }
  }

  return (
    <>
      <div className="pomodoro_timer">
        <div
          style={{
            background: `${other}`,
            borderColor: `${other}`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
          className="clock"
        >
          {minutes === 0 && seconds === 0 ? null : (
            <h1>
              {" "}
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </h1>
          )}
        </div>

        <button className="pushable">
          <span
            className="front"
            style={{
              background: "white",
              color: other,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
            onClick={handleStart}
          >
            {buttonName ? "pause" : "start"}
          </span>
        </button>

        <div>
          {
            // here will be two condition .. array is empty and buttonName
          }
          {pomoTrack
            ? array.map((ele, key) => {
                return (
                  <Animated
                    className="element_container"
                    animationIn={animationType()}
                    animationInDuration={1000 + key * 300}
                    isVisible={true}
                  >
                    <div className="element">
                      {pomo ? (
                        pomo % 4 === key ? (
                          <div>🍅 pomo number {key + 1} is on track</div>
                        ) : pomo % 4 < key ? (
                          <div>🧐 pomo number {key + 1} is still waiting </div>
                        ) : (
                          <div>🎉you completed pomo number {key + 1}</div>
                        )
                      ) : key == 0 ? (
                        <div>🍅 pomo number {key + 1} is on track ... </div>
                      ) : (
                        <div>🧐 pomo number {key + 1} is waiting </div>
                      )}
                    </div>
                  </Animated>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
}

export default PomodoroTimer;
