import React from 'react'
import './App.css'
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";


function App() {
  const [personaje, SetPersonaje] = React.useState([])
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => SetPersonaje(data.results))
  }, [])

  return (
    <>
    
      <h1 className='text-center text-4xl py-3 font-bold bg-black text-white'>Personajes de Rick y Morty</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 text-white bg-black ">
        {personaje.map((personaje) => (
          <div className="card flex flex-col justify-center items-center" key={personaje.id}>
            <img className='rounded py-4' src={personaje.image} alt={personaje.name} />
            <h2 className='text-2xl font-semibold'>{personaje.name}</h2>
            <p>Especie: {personaje.species}</p>
            <p>Género: {personaje.gender}</p>
            <p>Estado: {personaje.status}</p>
            <p>Origen: {personaje.origin.name}</p>
            <p>Ubicación: {personaje.location.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App
