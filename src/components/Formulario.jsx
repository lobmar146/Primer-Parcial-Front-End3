import { useState } from 'react'
import ListaErrores from './ListaErrores'

import generarId from './Autoid.js'

export default function Formulario(props) {
  const { guardarPersona } = props
  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState(0)
  const [lenguajeFavorito, setLenguajeFavorito] = useState('')
  const [error, setError] = useState([])

  const onChangeNombre = e => {
    setNombre(e.target.value)
  }

  const onChangeEdad = e => {
    setEdad(e.target.value)
  }

  const onChangeLenguajeFavorito = e => {
    setLenguajeFavorito(e.target.value)
  }
  const agregarError = errorNuevo => {
    setError(prevErrors => [
      ...prevErrors,
      { nombreError: errorNuevo, id: generarId() }
    ])
  }

  const validarFormulario = () => {
    let resultado = true
    setError([])
    if (!/^\S/.test(nombre)) {
      agregarError('El nombre no puede tener espacio en blanco al principio')
      resultado = false
    }
    if (nombre.trim().length <= 2) {
      agregarError('El nombre debe tener al menos 3 caracteres')
      resultado = false
    }
    if (edad < 18) {
      agregarError('La persona tiene que ser mayor de edad')
      resultado = false
    }
    if (!/^\S/.test(lenguajeFavorito)) {
      agregarError(
        'El lenguaje favorito no puede tener espacio en blanco al principio'
      )
      resultado = false
    }
    if (lenguajeFavorito.trim().length <= 6) {
      agregarError('El Lenguaje debe tener al menos 6 caracteres')
      resultado = false
    }
    return resultado
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (validarFormulario()) {
      guardarPersona(nombre, edad, lenguajeFavorito)
      setNombre('')
      setEdad(0)
      setLenguajeFavorito('')
    }
  }

  return (
    <section>
      <h1>¿CUAL ES TU LENGUAJE FAVORITO?</h1>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor='nombre-apellido'>Nombre 👀</label>
        <input
          type='text'
          id='nombre-apellido'
          value={nombre}
          placeholder='Ingrese su nombre y apellido'
          onChange={onChangeNombre}
        />

        <label htmlFor='edad'>Edad 🔢</label>
        <input
          type='number'
          id='edad'
          value={edad}
          placeholder='Ingrese su edad'
          onChange={onChangeEdad}
        />

        <label htmlFor='lenguaje-favorito'>Lenguaje favorito 💻</label>
        <input
          type='text'
          id='lenguaje-favorito'
          value={lenguajeFavorito}
          placeholder='Ingrese su lenguaje de Programación favorito'
          onChange={onChangeLenguajeFavorito}
        />
        <button>Enviar data 📨</button>
        {error.length === 0 ? undefined : <ListaErrores errores={error} />}
      </form>
    </section>
  )
}
