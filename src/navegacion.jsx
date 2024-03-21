// Importación de estilos CSS para la navegación
import '../src/navegacion.css'

// Importación de imagen del logo desde la carpeta de activos
import image from '../src/assets/image.png'

// Importación de iconos de React
import { FaAlignJustify } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

// Componente funcional de navegación
function Navegacion() {
  // Renderización del componente de navegación
  return (
    <>
      {/* Barra de navegación superior con fondo rosa */}
      <ul className='roseBar'>
        {/* Promoción */}
        <h6 className='d20'>20% en frutas y verduras de 6 am a 12 pm</h6>
        {/* Botón de compra */}
        <button className='compra'>¡Compra ya!</button>
      </ul>

      {/* Barra de navegación principal con fondo amarillo */}
      <ul className='yellowBar'>
        {/* Logo del Exito */}
        <li><a href="/"><img src={image} alt='logode redireccion de exito'/></a></li>
        {/* Icono de menú */}
        <li><FaAlignJustify /></li>
        {/* Enlace al inicio */}
        <li><a href="/"> Menú</a></li>
        {/* Campo de búsqueda */}
        <li className='Buscar'><div>Buscar en exito.com</div> <FaSearch className='searchIcon'/></li>
        {/* Icono de ubicación */}
        <a href="">< FaMapMarkerAlt className='mapMarker'/></a>
        {/* Opciones de entrega */}
        <li><a href="/">¿Cómo quieres <br /> recibir tu pedido?</a></li>
        {/* Icono de usuario */}
        <li className='user'><a href="/"><FaUserAlt/> <br /> Mi cuenta</a></li>
        {/* Icono de carrito de compras */}
        <li><a href="/"><FaShoppingCart/> <br />Carrito</a></li>
      </ul>
    </>
  )
}

// Exportación del componente de navegación
export default Navegacion