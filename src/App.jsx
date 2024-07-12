import './App.css';
import React from 'react';
import useFecthCharacters from './hooks/useFecthCharacters';
import Character from './components/Character';

const App = () => {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const { data: pokemonData, loading: pokemonLoading, error: pokemonError } = useFecthCharacters(urlPokemon);
  const { data: rickData, loading: rickLoading, error: rickError } = useFecthCharacters(urlRick);

  if (pokemonLoading || rickLoading) {
    return <div>Loading...</div>;
  }

  if (pokemonError || rickError) {
    return <div>Error: {pokemonError?.message || rickError?.message}</div>;
  }

  return (
    <div>
      <h2>Personaje Pokemon</h2>
      {pokemonData && <Character name={pokemonData.name} image={pokemonData.sprites.front_default} />}

      <h2>Personaje Rick and Morty</h2>
      {rickData && <Character name={rickData.name} image={rickData.image} />}
    </div>
  );
};

export default App;