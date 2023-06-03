import imagen from '../assets/react-for-haters.gif'
export default function Card(props) {
  const { nombre, edad, lenguajeFavorito } = props
  return (
    <div className='card'>
      <hr />
      <h2>
        Hola Lince, tu nombre es: <span>{nombre}</span>
      </h2>
      <hr />
      <p>Tenes {edad} añitos 👶🏻</p>
      <hr />
      <p>
        TU LENGUAJE FAVORITO ES: <span>{lenguajeFavorito}</span>
      </p>
      <hr />
      {lenguajeFavorito.toLowerCase() === 'reactjs' ? (
        <img src={imagen} alt='reactjs' />
      ) : undefined}
    </div>
  )
}
