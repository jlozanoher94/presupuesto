import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {

    //definir el state
    const [cantidad, guardarCantidad] = useState(0);

    const [error, cambiarError] = useState(false);

   
    

    //submit para definir el presupuesto
    const crearPresupuesto = e =>{
        e.preventDefault();  

        //validar
        if(cantidad<1 || isNaN(cantidad)){
            cambiarError(true);
            return;
        }
    
        //despues de validar
        cambiarError(false);  
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false); 
    }

    return ( 
        <Fragment>
            <h2> Coloca tu presupuesto </h2>
            {error? <Error mensaje='El presupuesto es incorrecto'/> : null}
            <form onSubmit={crearPresupuesto}>
                <input
                    type="number"   
                    className='u-full-width'
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                />

                <input
                    type='submit'
                    className='button-primary u-full-width'
                    value='Definir Presupuesto'
                />
            </form>
        </Fragment>
    );
}

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}
 
export default Pregunta;