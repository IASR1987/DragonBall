import { useEffect, useState } from 'react';
import axios from 'axios';

function DragonBallCharacters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Efecto para obtener los personajes de la API de DragonBall
  useEffect(() => {
    const fetchCharacters = async () => {
      const characterList = []; // Lista temporal para almacenar los personajes obtenidos
      try {
        // Hacemos las solicitudes para cada personaje
        for (let i = 1; i <= 20; i++) {
            //el 36 da error
            const response = await axios.get("https://thingproxy.freeboard.io/fetch/https://dragonball-api.com/api/characters/"+i);
            if (response.data) {
              characterList.push(response.data); // Agregamos el personaje a la lista temporal
            } else {
              console.log(response.data);
              setError('Datos inesperados recibidos de la API.');
              break; // Salimos del ciclo si recibimos datos inesperados
            }
        }

        // Cuando todas las solicitudes estén completadas, actualizamos el estado
        setCharacters(characterList); 
        setLoading(false);
      } catch (error) {
        setError(error.response ? error.response.data : error.message); // Si ocurre un error, lo guardamos
        setLoading(false);
      }
    };

    fetchCharacters(); // Ejecutamos la función para obtener los personajes
  }, []); // El array vacío asegura que solo se ejecute una vez al montar el componente

  // Si está cargando, mostramos un mensaje
  if (loading) return <p>Cargando personajes...</p>;

  // Si hay un error, mostramos el mensaje de error
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-8'>
        {characters.map((character) => (
          <div key={character.id} className='flex justify-start flex-col relative mb-20 w-full h-full'>
            <div className='rounded-t-2xl flex justify-center items-center w-full h-full bg-cover' style={{backgroundImage: "url('public/fondo.webp')"}}>
              <img
                src={character.image}
                alt={character.name}
                className='object-contain min-h-auto max-h-96 overflow-visible transition-transform duration-500 ease-in-out transform hover:scale-150'
              />
            </div>
            <div className='bg-gray-600 rounded-b-2xl w-full h-2/4 p-5'>
                <h3 className='title flex text-amber-500 z-10 text-5xl w-full h-3/10 whitespace-nowrap text-ellipsis'>{character.name}</h3>
                <h3 className='flex text-white text-xl  z-10 w-full h-1/10'>{character.race} - {character.gender}</h3>
                <h3 className='flex text-amber-500 text-xl z-10 w-full h-1/10'>Ki</h3>
                <h3 className='flex text-white text-xl  z-10 w-full h-1/10'>{character.ki}</h3>
                <h3 className='flex text-amber-500 text-xl z-10 w-full h-1/10'>Max Ki</h3>
                <h3 className='flex text-white text-xl  z-10 w-full h-1/10'>{character.maxKi}</h3>
                <h3 className='flex text-amber-500 text-xl z-10 w-full h-1/10'>Afiliación</h3>
                <h3 className='flex text-white text-xl  z-10 w-full h-/10'>{character.affiliation}</h3>
            </div>
          </div>
        ))}
    </div>
  );
}

export default DragonBallCharacters;
