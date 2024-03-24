import { useEffect, useState} from 'react';
import {API_COUNTRIES} from '../../constans/constans';
import Cards from '../card/Cards';
import Titulo from '../titulo/Titulo';
import './MiApi.css'

function MiApi() {
  const [dataApi, setDataApi] = useState([]);
  // https://rickandmortyapi.com/api/character
  useEffect(() => {
    async function getApi() {
      const response = await fetch(`${API_COUNTRIES}`);
      const data = await response.json();
      setDataApi(data)
      console.log(data);
    }
    getApi();
  }, []);

  return (
    <>
      <Titulo style={{fontSize: '2rem', marginBottom: '1rem'}} texto="Api de paises, Prueba Reactt" />
      <section className="container-api">
        {dataApi.length > 0 ? (
          dataApi.map((item) => (
            <Cards
              key={item.name.common}
              flag={item.flags.png}
              name={item.name.official}
              capital={item.capital}
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