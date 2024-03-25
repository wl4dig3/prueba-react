import Card from 'react-bootstrap/Card';

function Cards({name, capital, flag, timezones, region, population}) {
  return (
    <Card style={{ marginLeft: '1rem', zIndex: "-1" }}>
      <Card.Img variant="top" src={flag} alt={name} />
      <Card.Body>
        <Card.Title className='text-center'>País: {name}</Card.Title>
        <Card.Text className='text-center'>
         Capital:  {capital}
        </Card.Text>
        <Card.Text className='text-center'>
          Region: {region}
        </Card.Text>
        <Card.Text className='text-center'>
          Poblacion: {population}
        </Card.Text>
        <Card.Text className='text-center'>
          GMT: {timezones}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;