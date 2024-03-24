import { useEffect, useState} from 'react';
import {API_COUNTRIES} from '../../constans/constans';
import Cards from '../card/Cards';
import Titulo from '../titulo/Titulo';
import Form from '../form/Form';
import './MiApi.css'

function MiApi() {
  const [dataApi, setDataApi] = useState([]);
  useEffect(() => {
    async function getApi() {
      const response = await fetch(`${API_COUNTRIES}`);
      const data = await response.json();
      setDataApi(data)
    }
    getApi();
  }, []);

  return (
    <>
      <header className='header-t'>
        <Titulo
          style={{ fontSize: "1.5rem", color: "#fff" }}
          texto="Api de paises, Prueba React"
        />
      </header>
      <Form style={{marginLeft: '1.5rem'}} />
      <section className="container-api">
        {dataApi.length > 0 ? (
          dataApi.map((item) => (
            <Cards
              key={item.name.common}
              flag={item.flags.png}
              name={item.name.official}
              capital={item.capital}
              region={item.region}
              timezones={item.timezones}
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