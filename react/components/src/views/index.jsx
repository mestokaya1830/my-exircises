import { useState } from 'react'
import Popup from '../components/popup.jsx'
import Button from '../components/button.jsx'


export default function Index() {
  const [open, openPopup] = useState()
  
  return (
    <>
      <h1>Home</h1>
      <p>Event Prop</p>
      <button onClick={() => openPopup(true)}>Open Popup</button>
      {open && <Popup message= "Parent Message" openPopup={openPopup} />}

      <p>Slot Prop</p>
      <Button styleProp="default">
        Slot Component
      </Button>
      <Button styleProp="red">
        Slot Component
      </Button>
      <Button styleProp="blue">
        Slot Component
</Button>
    </>
  )
}