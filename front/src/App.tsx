import { useState } from 'react'
import logo from './logo.svg'
import './App.scss'
import { Phone } from './components/phone/Phone'
import { Collapse } from './components/Collapse'

function App() {
  return (
    <div className="App">
      <Phone>
        <Collapse text='Hey there' />
      </Phone>
    </div>
  )
}

export default App
