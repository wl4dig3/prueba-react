import Card from 'react-bootstrap/Card';

function Cards({name, capital, flag}) {
  return (
    <Card className='mx-1 my-1' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={flag} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {capital}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;