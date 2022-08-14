import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  // the tracking number wich is responsible for page nummber
  const [trackingNumber, setTrackingNumber] = useState(1);

  // states from customising background
  const [background, setBackground] = useState();
  const [other, setOther] = useState();
  
  if (localStorage.getItem("main_color_1") === null) {
    // storing colors when the user first opens the app
    localStorage.setItem("main_color_1", "#CD6464")
    localStorage.setItem("second_color_1", "#DC7878")
    localStorage.setItem("main_color_2", "#B76471")
    localStorage.setItem("second_color_2", "#FF7A91")
    localStorage.setItem("main_color_3", "#B973AA")
    localStorage.setItem("second_color_3", "#C87DBE")
    // storing the sound when the user first opens the app
    localStorage.setItem("selected_sound_value", 1)
    // storing the animation effect value
    localStorage.setItem("selected_animation_effect", 1)
    // storing the test mode
    localStorage.setItem("app_mode", "normal")
  }

  // states to store the color values
  const [main_color_1, setMainColor1] = useState(localStorage.getItem("main_color_1"))
  const [second_color_1, setSecondColor1] = useState(localStorage.getItem("second_color_1"))
  const [main_color_2, setMainColor2] = useState(localStorage.getItem("main_color_2"))
  const [second_color_2, setSecondColor2] = useState(localStorage.getItem("second_color_2"))
  const [main_color_3, setMainColor3] = useState(localStorage.getItem("main_color_3"))
  const [second_color_3, setSecondColor3] = useState(localStorage.getItem("second_color_3"))
  // state to tell me the value of selected sound
  const [selectedSound, setSelectedSound] = useState(localStorage.getItem("selected_sound_value"))
  // state to tell me the value of selected animation
  const [selectedAnimation, setSelectedAnimation] = useState(localStorage.getItem("selected_animation_effect"))
  // state to tell me if the user is in test mode or not
  const [appMode, setAppMode] = useState(localStorage.getItem("app_mode"))

  function handleBackground(number) {
    if (number === 1) {
      setBackground(main_color_1);
      setOther(second_color_1);
    } else if (number === 2) {
      setBackground(main_color_2);
      setOther(second_color_2);
    } else if (number === 3) {
      setBackground(main_color_3);
      setOther(second_color_3);
    }
  }

  useEffect(() => {
    localStorage.setItem("main_color_1", main_color_1)
    localStorage.setItem("second_color_1", second_color_1)
    localStorage.setItem("main_color_2", main_color_2)
    localStorage.setItem("second_color_2", second_color_2)
    localStorage.setItem("main_color_3", main_color_3)
    localStorage.setItem("second_color_3", second_color_3)
    localStorage.setItem("selected_sound_value", selectedSound)
    localStorage.setItem("selected_animation_effect", selectedAnimation)
    localStorage.setItem("app_mode", appMode)
  }, [main_color_1, second_color_1, main_color_2, second_color_2, main_color_3, second_color_3, selectedSound, appMode, selectedAnimation]);


  return (
    <Context.Provider
      value={{
        background,
        other,
        handleBackground,
        trackingNumber,
        setTrackingNumber,
        main_color_1,
        setMainColor1,
        second_color_1,
        setSecondColor1,
        main_color_2,
        setMainColor2,
        second_color_2,
        setSecondColor2,
        main_color_3,
        setMainColor3,
        second_color_3,
        setSecondColor3,
        selectedSound,
        setSelectedSound,
        selectedAnimation,
        setSelectedAnimation,
        appMode,
        setAppMode
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
