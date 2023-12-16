import { Row, Col, Card, Container } from "react-bootstrap";

export default function Skill() {
  const skill = [
    "PHP",
    "Laravel",
    "Python",
    "MySQL",
    "MongoDB",
    "ExpressJS",
    "ReactJS",
    "NodeJS",
  ];

  return (
    <>
      <Container className="my-5" style={{ backgroundColor: "white" }}>
        <h1 className="text-center mt-5" id="skill">
          Skill
        </h1>
        <Row xs={1} md={4} className="g-5 py-5">
          {Array.from({ length: skill.length }).map((_, idx) => (
            <Col key={idx}>
              <Card className="p-3 m-2 shadow">
                <Row>
                  <Col
                    xs
                    lg="5"
                    className="d-flex align-items-center justify-content-center">
                    <Card.Img
                      className=""
                      variant="top"
                      src={"src/assets/icon/" + skill[idx] + ".svg"}
                      style={{ maxWidth: "50px" }}
                    />
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Title className="text-center">
                        {skill[idx]}
                      </Card.Title>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
