import './App.css'
import Card from './components/Card'
import Formulario from './components/Formulario'
import { useState } from 'react'

function App() {
  const [persona, setPersona] = useState({})

  const guardarPersona = (nombre, edad, lenguajeFavorito) => {
    setPersona({ nombre, edad, lenguajeFavorito })
  }
  return (
    <>
      <Formulario guardarPersona={guardarPersona} />

      {Object.keys(persona).length === 0 ? undefined : (
        <Card
          nombre={persona.nombre}
          edad={persona.edad}
          lenguajeFavorito={persona.lenguajeFavorito}
        />
      )}
    </>
  )
}

export default App
