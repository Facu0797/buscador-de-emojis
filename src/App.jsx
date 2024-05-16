import { useState } from 'react'
import './App.css'
import BuscarEmoji from './Componentes/BuscarEmoji'
import Header from './Componentes/Header'
import Resultados from './Componentes/Resultados'

function App() {

  const [emoji, setEmoji] = useState("")
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`App ${darkMode ? "darkbg" : ""}`}>
      <Header />
      <BuscarEmoji setEmoji={setEmoji} setDarkMode={setDarkMode} darkMode={darkMode} />
      <Resultados emoji={emoji} darkMode={darkMode}/>
    </div>
  )
}

export default App
