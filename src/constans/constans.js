const URL_base = 'https://rickandmortyapi.com/api/character';

const getPersonajes = (fn) => {
    fetch(URL_base)
      .then(res => res.json())
      .then(data => fn(data.results))
      .catch(err => console.log(err))
  } 
export {
    URL_base,
    getPersonajes
}