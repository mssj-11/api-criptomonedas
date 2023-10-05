import React, { Fragment, useState } from 'react'
import styled from '@emotion/styled'


const Label = styled.label`
    display: block;
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-tranform: uppercase;
    font-weight: bold;
    font-size: 2.1rem;
    margin-top: 2rem;
`;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 10px;
    -webkit-appearance: none;
`;


const useCriptomoneda = (label, stateInicial, opciones) => {
    //  State custom hook
    const [state, actualizarState] = useState(stateInicial);

    const SeleccionarCripto = () => (
        <Fragment>
            <Label>{label} </Label>
            <Select onChange={e => actualizarState(e.target.value)} value={state}>
                <option value=''>- Seleccione -</option>
                {opciones.map(opcion => (
                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>
                        {opcion.CoinInfo.FullName}
                    </option>
                ))}
            </Select>
        </Fragment>
    );

    //  Retornando el State y la funcion para modificar el State
    return [state, SeleccionarCripto, actualizarState];

}

export default useCriptomoneda
