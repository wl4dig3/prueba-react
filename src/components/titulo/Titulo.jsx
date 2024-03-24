import propTypes from 'prop-types';

function Titulo({texto, style}) {
  return (
    <div style={style} className='titulo'>{texto}</div>
  )
}
Titulo.prototype = {
    texto: propTypes.string,
    estilos: propTypes.object
}
export default Titulo