/*rafce*/
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';


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

  //  State del listado de criptomonedas
  const [ criptoMonedas, guardarMonedas ] = useState([]);

  const Monedas = [
    { codigo: 'USD', nombre: 'Dolar Estadounidense' },
    { codigo: 'MXN', nombre: 'Peso Mexicano' },
    { codigo: 'EUR', nombre: 'Euro' },
    { codigo: 'GBP', nombre: 'Libra Esterlina' }
  ];

  //  Usando useMoneda
  const [moneda, Seleccionar] = useMoneda('Elige tu moneda', '', Monedas);

  //  Utilizando el us useCriptomoneda
  const [criptomoneda, SeleccionarCripto] = useCriptomoneda('Elige tu Criptomoneda', '', criptoMonedas);

  //  Consulta a la API
  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=usd`;
      const resultado = await axios.get(url);
      guardarMonedas(resultado.data.Data);
    };
    consultarApi();
  }, []);


  return (
    <form>
        <Seleccionar />
        <SeleccionarCripto />
        <Boton type='submit' value='Calcular' />
    </form>
  )
}

export default Formulario