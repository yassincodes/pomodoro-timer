
function Statics({setIsOpen2, other}) {
  // the number of pomos is stored in local storage
  // here I'm getting that number with .getItem("pomo")
  let pomo = localStorage.getItem("pomo")

    return (
        <div>
        <h2 style={{color:other}}>hi I'm statics</h2>
        <div>
          <p>total number of finished pomodoros :</p>
          {pomo ? pomo + " pomos 🍅" : 0 + " : you didn't finish a pomo yet 🍅"}
          <p>total number of working hours :</p>
          {pomo && (pomo *25 > 60) ? ~~((pomo * 25)/60) + " hours" + (~~((pomo * 25)/60) % 60 !== 0 ? " and " + ~~((pomo * 25))%60 + " minutes 🕖" : "") : "you didn't finish an hour yet" }
        </div>
        <button className="header_buttons_settings" style={{background:other, borderColor:other, margin:"30px auto 0 auto", display:"flex", alignItems:"center"}} onClick={() => setIsOpen2(false)}>close me</button>
       
        </div>
    )
}

export default Statics