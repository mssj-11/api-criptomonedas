import React, { Fragment, useState } from 'react'

const useMoneda = () => {
    //  State custom hook
    const [state, actualizarState] = useState('');

    const Seleccionar = () => (
        <Fragment>
            <label>Moneda</label>
            <select>
                <option value='MXN'>Peso Mexicano</option>
                <option value='USD'>Dolar Estadounidende</option>
                <option value='MXN'>Euro</option>
            </select>
        </Fragment>
    );

    //  Retornando el State y la funcion para modificar el State
    return [state, Seleccionar, actualizarState];

}

export default useMoneda
