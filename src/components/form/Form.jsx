import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import './Form.css'

function Form({style, getPersonajePorNombre}) {
    const [buscarPersonaje, setBuscarPersonaje] = useState('')

  const handleChange = (e) => {
    setBuscarPersonaje(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getPersonajePorNombre(buscarPersonaje)
  };


  return (
    <form style={style} className='form-buscar' onSubmit={handleSubmit}>
        <input
         className='input-buscar'
         type='text'
         placeholder='Busca tu personaje'
         onChange={handleChange}
         value={buscarPersonaje}/>
        <Button type='submit' variant="primary">Buscar</Button>
    </form>
  );
}

export default Form;
