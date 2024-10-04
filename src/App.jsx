
import React, { useState } from 'react';
import './App.css';
import ComputadorasDisponibles from './ComputadorasDisponibles';
import ComputadorasNoSirven from './ComputadorasNoSirven';
import HorasDisponibles from './HorasDisponibles';
import Navbar from './Navbar';

function App() {
  const [seccion, setSeccion] = useState('inicio');

  const handleBotonComputadoras = () => {
    setSeccion('computadoras');
  };

  const handleBotonHoras = () => {
    setSeccion('horas');
  };

  const handleBotonNoSirven = () => {
    setSeccion('noSirven');
  };

  return (
    <div className="app-container">
      <Navbar />
      {seccion === 'inicio' && (
        <div className="botones-contenedor">
          <button onClick={handleBotonComputadoras}>Computadoras Disponibles</button>
          <button onClick={handleBotonHoras}>Horas Disponibles</button>
          <button onClick={handleBotonNoSirven}>Computadoras No Sirven</button>
        </div>
      )}
      {seccion === 'computadoras' && <ComputadorasDisponibles />}
      {seccion === 'horas' && <HorasDisponibles />}
      {seccion === 'noSirven' && <ComputadorasNoSirven />}
    </div>
  );
}

export default App;
