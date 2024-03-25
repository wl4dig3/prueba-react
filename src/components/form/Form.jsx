import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import './Form.css'
import { API_COUNTRIES } from '../../constans/constans';

function Form({style, onSearch}) {
    const [buscar, setBuscar] = useState('');
    const handleChange = (e) => setBuscar(e.target.value);

    const handleSubmit = async (e) => {
         e.preventDefault;
         onSearch(buscar)
        try {
            const response = await fetch(`${API_COUNTRIES}/all`);
            console.log(response);
        } catch (error) {
            console.log("error busqueda", error);
        }
    };


  return (
    <form style={style} className='form-buscar' onSubmit={handleSubmit}>
        <input
         className='input-buscar'
         type='text'
         placeholder='Busca tu país'
         onChange={handleChange}
         value={buscar}/>
        <Button type='submit' variant="primary">Search</Button>
    </form>
  );
}

export default Form;
