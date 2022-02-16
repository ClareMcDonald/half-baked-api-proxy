import { useState } from 'react';

export default function WeatherSearch() {
  // you'll need to track your weather search results, the loading state, and a form field for location with a default value.
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState('portland');
  const [state, setState] = useState('or');
  const [country, setCountry] = useState('usa');

  async function handleWeatherSubmit(e) {
    e.preventDefault();
    try {
      // set the loading state to true
      setLoading(true);
      // use fetch to make a request to your netlify weather function. Be sure to pass the location as a query param in the URL
      const response = await fetch(`/.netlify/functions/weather?city=${city}&state=${state}&country=${country}`);
  
      // put the jsonified data in state and set the loading state to false
      const json = await response.json();

      

    } catch (e) {
      console.error(e);
    }
  }    
  return (
    <section className='weather'>
      {/* make the fetch on submit */}
      <form onSubmit={handleWeatherSubmit}>
            Search weather for a city
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <label> City
          <input onChange={e => setCity(e.target.value)} value={city}/>
        </label>
        <label> State
          <input onChange={e => setState(e.target.value)} value={state}/>
        </label>
        <label> Country
          <input onChange={e => setCountry(e.target.value)} value={country} />
        </label>
        <button>Get weather</button>
      </form>
      {/* Make a ForecastList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
    </section>
  );

}
