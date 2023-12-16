import { Col, Row, Card, Container } from "react-bootstrap";

export default function Services() {
  const myServices = ["Frontend Developer", "Backend Developer"];
  return (
    <div
      id="services"
      className="justify-content-center pb-5"
      style={{ backgroundColor: "#f9f9fb" }}>
      <Container>
        <h1 className="py-5">My Services</h1>
        <Row xs={1} md={2} className="g-5">
          {Array.from({ length: myServices.length }).map((_, idx) => (
            <Col key={idx}>
              <Card
                className="border-0 justify-content-center"
                style={{ height: "10rem" }}>
                <Row>
                  <Col
                    xs
                    lg="5"
                    className="d-flex align-items-center justify-content-center">
                    <Card.Img
                      variant="top"
                      src={"public/icon/" + myServices[idx] + ".jpg"}
                      style={{ maxWidth: "7rem" }}
                    />
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Title className="text-center">
                        <p className="fs-3">{myServices[idx]}</p>
                      </Card.Title>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
        <Row
          xs={1}
          md={1}
          className="g-5 justify-content-center"
          style={{ marginTop: "1rem" }}>
          <Col key={1} style={{ maxWidth: "50rem" }}>
            <Card
              className="border-0 justify-content-center"
              style={{ height: "10rem" }}>
              <Row>
                <Col
                  xs
                  lg="5"
                  className="d-flex align-items-center justify-content-center">
                  <Card.Img
                    variant="top"
                    src={"public/icon/Web Dev.jpg"}
                    style={{ maxWidth: "7rem" }}
                  />
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Title className="text-center align-item-center">
                      <p className="fs-3">Web Development</p>
                    </Card.Title>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
