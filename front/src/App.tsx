import { useState } from 'react'
import logo from './logo.svg'
import './App.scss'
import { Phone } from './components/phone/Phone'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hey there</h1>
      <Phone />
    </div>
  )
}

export default App
