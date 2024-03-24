import Card from 'react-bootstrap/Card';

function Cards({name, capital, flag, timezones, region}) {
  return (
    <Card className='.col-4' style={{ marginLeft: '1rem' }}>
      <Card.Img variant="top" src={flag} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {capital}
        </Card.Text>
        <Card.Text>
          {region}
        </Card.Text>
        <Card.Text>
          {timezones}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;