import { useState } from 'react';
import PokemonList from './PokemonList';
import Spinner from './Spinner';

export default function PokemonSearch() {
      // you'll need to track your pokemon search results, the loading state, and one form field: name. For this form field, set a real initial values (like 'pikachu') so the form populates with a default value.
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [searchByName, setSearchByName] = useState('pikachu');

  
  async function handlePokemonSubmit(e) {
    e.preventDefault();
      
        // set the loading state to true
    setLoading(true);

        // use fetch to make a request to your netlify pokemon function. Be sure to pass the pokemon name as a query param in the URL
    const endpointURL = `https://pokedex-alchemy.herokuapp.com/api/pokedex?${searchByName}=${search}`;

    const response = await fetch(endpointURL);

        // put the jsonified data in state and set the loading state to false
    const json = await response.json();
    setPokemon(json.results);

    setLoading(false);
  }
      
  return (
    <section className='pokemon'>
      {/* make the fetch on submit */}
      <form onSubmit={handlePokemonSubmit}>
            Search pokemon for a name
        {/* add inputs/labels for name, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <input onChange={e => setSearch(e.target.value)} />
        <select onChange={e => setSearchByName(e.target.value)} />
        <option value='pokemon'>Search By Name</option>
        <button>Get pokemon</button>
      </form>
      {/* Make a PokemonList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
      if {!loading}
      ? <PokemonList pokemon={pokemon} />
      : <Spinner />
    </section>
  );

}
