// IMPORTACIONES DE LOS COMPONENTES
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navegacion from './navegacion.jsx'
import Ruta from './ruta.jsx'
import Imagenes from './Imagenes.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/*Exportacion predeterminada*/}
    <Navegacion/> {/*Barra de promocion (Rosada) y la de navegacion (Amarilla)*/}
    <Ruta/> {/*Donde se encuentra el producto en el sitio web*/}
    <Imagenes/> {/*Muestra general*/}
    
  
    
  </React.StrictMode>,
)
