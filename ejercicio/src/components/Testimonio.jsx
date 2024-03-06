//import React from 'react'; //No es necesario a partir del 2020 con la version 17
import '../style-sheets/Testimonio.css';

// Componente funcional
function Testimonio(props) {
    return(
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' src={require(`../images/${props.imagen}`)} alt='Foto' />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
                <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
                <p className='texto-testimonio'>"{props.testimonio}"</p>
            </div>
        </div>
    );
}

export default Testimonio;