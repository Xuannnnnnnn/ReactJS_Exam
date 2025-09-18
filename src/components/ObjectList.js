import { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { Navbar, Nav, Button } from "react-bootstrap";


function ObjectList() {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    fetch("/data/objects.json")
      .then(res => res.json())
      .then(data => setObjects(data));
  }, []);

  return (
    <Container className="my-5 text-center">
      <h3 className="mb-4" style={{fontSize:"30px"}}>SHOULD WHO LEARN PROGRAMMING IN FPT APTECH?</h3>
      <Row>
        {objects.map(obj => (
          <Col md={4} key={obj.id}>
            <Card className="h-100 mb-4 shadow-sm">
              <Card.Img variant="top" src={obj.image} className="card-img-fixed"/>
              <Card.Body>
                <Card.Title className="text-uppercase" style={{fontSize:"30px"}}>{obj.title}</Card.Title>
                <Card.Text style={{fontSize: "20px"}}><b>{obj.description}</b></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default ObjectList;
