/*rafce*/
import React from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';


const Boton = styled.input`
    width: 100%;
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease ;

    &:hover{
      background-color: #326ac0;
      cursor: pointer;
    }
`;


const Formulario = () => {
  //  Usando useMoneda
  const [state, Seleccionar, actualizarState] = useMoneda();
  return (
    <form>
        <Seleccionar />
        <Boton type='submit' value='Calcular' />
    </form>
  )
}

export default Formulario