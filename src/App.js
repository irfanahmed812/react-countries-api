// import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      <Countries></Countries>
    </div>
  );
}

export default App;


// https://restcountries.com/v3.1/all

// function LoadCountries() {

//   const [countries, setCountries] = useState([])
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])


//   return (
//     <div>
//       <h3>{countries.length}</h3>
//       {
//         countries.map(country => <Country
//           singleCountry={country}
//         ></Country>)
//       }
//     </div>
//   )

// }


// function Country({ singleCountry }) {
//   console.log(singleCountry);
//   const { name, population, capital } = singleCountry;
//   return (
//     <div>
//       <h3>Contry name: {name.official}</h3>
//       <p>Population: {population}</p>
//       <p>Capital: {capital}</p>
//     </div>
//   )
// }