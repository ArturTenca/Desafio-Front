import React, { useEffect, useState } from 'react';
import Sensor from '../components/Sensor/Sensor';

const Resultado = () => {
  const [grupos, setGrupos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/grupos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Adicione este log para verificar o formato dos dados
        setGrupos(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados:", error);
      });
  }, []); // Adicione a lista de dependências

  return (
    <>
      <h1>Resultados</h1>
      <Sensor data={grupos} />
    </>
  );
};

export default Resultado;