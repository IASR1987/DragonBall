import React from 'react';
import './App.css';
import DragonBallCharacters from '../src/components/DragonBallCharacters/DragonBallCharacters.jsx'; // Importamos el componente

function App() {
  return (
    <>
    <header className='bg-white h-20 flex justify-between flex-row '>
      <div>
        <img src="https://web.dragonball-api.com/images-compress/android-icon-192x192.webp"
        className='felx justify-center items-start sm:w-10 md:w-15 lg:w-20 ml-3.5'/>
      </div>
      <div className="flex flex-row md:text-2xl lg:text-3xl items-center gap-10 mr-10">
        <p>Docs</p>
        <p>About</p>
        <div className="bg-amber-300 rounded-3xl text-amber-50 p-2">
          <p>SUPPORT US</p>
        </div>
      </div>
    </header>
    <div className="App w-full h-full flex justify-center items-center flex-col">
      <img src="https://web.dragonball-api.com/images-compress/logo_dragonballapi.webp" alt="Logo Dragon Ball API" className='flex justify-center w-2/5'/>
      <h1 className='title text-orange-600 sm:text-5xl md:text-6xl lg:text-9xl flex justify-center p-10'>Dragon Ball API</h1>
      <div className='grid grid-rows-1 p-20 w-full h-full justify-center items-center'>
        <DragonBallCharacters /> {/* Usamos el componente de personajes */}
      </div>
      
    </div>
    </>
  );
}

export default App;
