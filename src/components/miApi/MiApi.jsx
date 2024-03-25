import { useEffect, useState} from 'react';
import {API_COUNTRIES} from '../../constans/constans';
import Cards from '../card/Cards';
import Titulo from '../titulo/Titulo';
import Form from '../form/Form';
import './MiApi.css'

function MiApi() {
  const [dataApi, setDataApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');


  const getCountries = async () => {
   try {
       const response = await fetch(`${API_COUNTRIES}/all`);
       if (!response.ok) throw new Error("Algo salió mal");
       const data = await response.json();
       setDataApi(data)
       setIsLoading(false)

   } catch (error) {
    setIsLoading(false)
    setError(error.message)
       console.log("error en MiApi.jsx", error);
   }
};
const getCountryByName = async (countryName) => {
try {
  const res = await fetch(`${API_COUNTRIES}/name/${countryName}`)
if (!res.ok) throw new Error('País no encontrado :(' );
const data = await res.json();
setDataApi(data)
setIsLoading(false)
} catch (error) {
  setIsLoading(false)
  setError(error.message)
}
}
  useEffect(() => {
    getCountries  ();
  }, []);

  return (
    <>
      <header className='header-t'>
        <Titulo
          style={{ fontSize: "1.5rem", color: "#fff" }}
          texto="Api de paises, Prueba React"
        />
      </header>
      <Form onSearch={getCountryByName} style={{marginLeft: '5.5rem', marginTop: '9rem'}} />
      <section className="container-api">
        {error && !isLoading && <h4>{error}</h4>}
        {dataApi.length > 0 ? (
          dataApi.map((item) => (
            <Cards
              key={item.name.common}
              flag={item.flags.png}
              name={item.name.official}
              capital={item.capital}
              region={item.region}
              timezones={item.timezones}
              population={item.population}
            />
          ))
        ) : (
          <div className="spinner"></div>
        )}
      </section>
    </>
  );
}

export default MiApi