import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Menú</h2>
      <ul>
        <li><a href="#">Gestión de equipos</a></li>
        <li><a href="#">Gestión de muestras</a></li>
        <li><a href="#">Informes</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
