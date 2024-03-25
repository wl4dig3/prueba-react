import { useEffect, useState} from 'react';
import {URL_base, getPersonajes} from '../../constans/constans';
import Cards from '../card/Cards';
import Titulo from '../titulo/Titulo';
import Form from '../form/Form';
import './MiApi.css'

function MiApi() {
  const [personajes, setPersonajes] = useState([])
  

  const getPersonajePorNombre = (valor) => {
    if (valor === '' || valor === ' ') {
      return getPersonajes(setPersonajes)
    }


    fetch(`${URL_base}/?name=${valor}`)
      .then(res => res.json())
      .then(data => setPersonajes(data.results))
      .catch(err => console.log(err))

  }
  useEffect(() => {
    getPersonajes(setPersonajes)
  }, []);

  return (
    <>
      <header className='header-t'>
        <Titulo
          style={{ fontSize: "1.5rem", color: "#fff" }}
          texto="Api de Rick and Morty, Prueba React"
        />
      </header>
      <Form getPersonajePorNombre={getPersonajePorNombre} style={{marginLeft: '5.5rem', marginTop: '9rem'}} />
      <section className="container-api">
      {personajes.length > 0 ?
          personajes.map((personaje) => <Cards key={personaje.id} {...personaje} />)
          : <div className="loader"></div>
        }      </section>
    </>
  );
}

export default MiApi