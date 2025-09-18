import { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

function SubjectList() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch("/data/subjects.json")
      .then(res => res.json())
      .then(data => setSubjects(data));
  }, []);

  return (
    <Container className="my-5 text-center">
      <h3 className="mb-4">WHAT IS THE COURSE PROGRAM?</h3>
      <Row className="justify-content-center">
        {subjects.map(sub => (
          <Col md={2} key={sub.id} className="mb-4">
            <Card className="border-0">
              <Card.Img
                variant="top"
                src={sub.image}
                style={{ width: "100px", height: "100px", margin: "0 auto" }}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "14px" }}>{sub.subject}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {}
      {subjects.length > 0 && (
        <p style={{ fontSize: "20px", marginTop: "20px" }}>
          <b>{subjects[0].description}</b>
        </p>
      )}
    </Container>
  );
}

export default SubjectList;
