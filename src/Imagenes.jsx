// Importación de estilos CSS para las imágenes
import '../src/imagenes.css'

// Importación de iconos de React
import { FaHeart } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

// Componente funcional de Imagenes
function Imagenes() {
    // Renderización del componente de Imagenes
    return (
        <>
            {/* Contenedor principal de imágenes */}
            <div className='mainContainer'>
                {/* Exhibición de imágenes */}
                <div className='exhibicion'>
                    {/* Miniaturas de imágenes */}
                    <div className='seleccion'>
                        <ul>
                            <li><div className='image1'></div></li>
                            <li><div className='image2'></div></li>
                            <li><div className='image3'></div></li>
                            <li><div className='image4'></div></li>
                        </ul>
                    </div>
                    {/* Imagen principal */}
                    <div className='mainImage'></div>
                    {/* Iconos de reacción y detalles de la imagen */}
                    <div className='iconsReaction'>
                        <ul>
                            <li> <FaHeart className='iconRe'/></li>
                            <li> <FaShareAlt className='iconShare'/></li>
                            <li> <FaArrowRight className='iconArrow'/></li>
                            <li> <FaCamera className='iconCamera'/> <h6>4 Imagenes</h6></li>
                        </ul>
                    </div>
                </div>
                {/* Detalles del producto */}
                <div className='box1'>
                    <p>XBOX-PLUT: 101154798-EAN:0889842640724</p>
                    <h3>Consola Xbox Serie X 1 TB Negra</h3>
                    <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/> <span>7 opiniones</span>
                    <div className='info'>
                        <div className='vendido'>
                            <b>Vendido por: </b> Tienda Tecnologica De Colombia
                        </div>
                        <div className='insideBox'>
                            <div className='precio'>
                                <div className='befaft'>
                                    <div className='descuento'>
                                        <h5 >- 41%</h5>
                                    </div>
                                    <del className='priceBefore'>$ 3.600.000</del>
                                </div>
                            </div>
                            <p>$ 2.119.882</p>
                            <button className='btnVendedores'>
                                <FaTag/> Ver otros vendedores desde $2.119.882
                            </button> 
                            <div className='infoEnvio'>
                                <h5><a href="/">Conoce las fechas y costos de entrega</a></h5>
                                <h5><FaTruck className='iconTab'/> <b>Enviado por Tienda Tecnologica De Colombia</b></h5>
                                <h5><FaSuitcase className='iconTab'/> <b>No disponible para compra y recoge</b> </h5>
                            </div>
                            <button className='shopingCar'>
                                Agregar<FaShoppingCart/>
                            </button><br />
                            <button className='btnVendedores'>
                                Comprar ahora
                            </button>
                        </div>
                    </div>
                    <div className='info'>
                        <div className='vendido'>
                            <h4><b>Informacion adicional</b></h4>
                        </div>
                        <div className='warranty'>
                            <FaCheck/> Garantia del producto: <b>3 meses</b>
                            <p><a href="/"><u>Ver terminos y condiciones del vendedor</u></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// Exportación del componente de Imagenes
export default Imagenes
