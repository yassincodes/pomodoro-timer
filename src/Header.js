import React, {useState, useContext} from "react"
import {Context} from "./Context"
import Modal from 'react-modal'
import Settings from "./Header_section/Settings"
import Statics from "./Header_section/Statics"



function Header() {
  const {other} = useContext(Context)
  
  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalIsOpen2, setIsOpen2] = useState(false)

  function closeModal() {
    setIsOpen(false);
    setIsOpen2(false)
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width:"50vw",
      height:"90vh",
      marginRight: '-50%',
      paddingLeft: '30px',
      paddingRight: '30px',
      transform: 'translate(-50%, -50%)',
      color:"black",
      textAlign:"start"
    },
  }


  return (
      <>
       <div className="header" style={{borderBottom: "3px solid" + other, backgroundRepeat:"no-repeat", backgroundSize:"100% 100%"}}>
         <div className="header_title">pomodoro</div>
         <div className="header_buttons">
           <div className="header_buttons_settings" style={{background:other}} onClick={() => setIsOpen(true)}>styling</div>
           <div className="header_buttons_statics" style={{background:other}} onClick={() => setIsOpen2(true)}>statitcs</div>
         </div>
       </div>

       {
        // this modal is responsible for showing the customisation
       }
       <Modal
         ariaHideApp={false}
         isOpen={modalIsOpen}
         onRequestClose={closeModal}
         style={customStyles}
         contentLabel="Example Modal"
        >
          <Settings setIsOpen={setIsOpen} other={other}/>
       </Modal>
        
       {
          // this modal is responsible for showing the statics
       }
        
       <Modal
         ariaHideApp={false}
         isOpen={modalIsOpen2}
         onRequestClose={closeModal}
         style={customStyles}
         contentLabel="Example Modal"
        >
          <Statics setIsOpen2={setIsOpen2} other={other}/>
        </Modal>
      </>
  )  
}

export default Header