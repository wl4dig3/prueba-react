import Card from 'react-bootstrap/Card';

function Cards({name, image, species, gender, status}) {
  return (
    <Card style={{ marginLeft: '1rem', zIndex: "-1" }}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title className='text-center'>Personaje: {name}</Card.Title>
        <Card.Text className='text-center'>
         Species: {species}
        </Card.Text>
        <Card.Text className='text-center'>
         Gender: {gender}
        </Card.Text>
        <Card.Text className='text-center'>
         Status: {status}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default Cards;