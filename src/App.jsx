import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [personaje, SetPersonaje] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => SetPersonaje(data.results));
  }, []);

  return (
    <>
      <h1 className="text-center text-4xl py-3 font-bold bg-black text-white">
        Personajes de Rick y Morty
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 text-white bg-black min-h-screen">
        {personaje.map((personaje) => (
          <div
            className="card flex flex-col justify-center items-center bg-gray-900 rounded-lg shadow-lg p-4 transition-transform hover:scale-105"
            key={personaje.id}
          >
            <img
              className="rounded-full w-32 h-32 object-cover mb-4 border-4 border-gray-700"
              src={personaje.image}
              alt={personaje.name}
            />
            <h2 className="text-xl md:text-2xl font-semibold text-center">
              {personaje.name}
            </h2>
            <p className="text-sm md:text-base">Especie: {personaje.species}</p>
            <p className="text-sm md:text-base">Género: {personaje.gender}</p>
            <p className="text-sm md:text-base">Estado: {personaje.status}</p>
            <p className="text-sm md:text-base">
              Origen: {personaje.origin.name}
            </p>
            <p className="text-sm md:text-base">
              Ubicación: {personaje.location.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
