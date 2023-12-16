import { Col, Row, Card, Container } from "react-bootstrap";
import BackendDev from "../assets/icon/Backend Developer.jpg";
import FrontendDev from "../assets/icon/Frontend Developer.jpg";
import WebDev from "../assets/icon/Web Dev.jpg";

export default function Services() {
  const myServices = [BackendDev, FrontendDev];

  const servicesName = myServices.map((e) => {
    const splited = e.split("/");
    const name = splited[4].split(".")[0];
    return name;
  });
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
                      src={myServices[idx]}
                      style={{ maxWidth: "7rem" }}
                    />
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Title className="text-center">
                        <p className="fs-3">{servicesName[idx]}</p>
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
                    src={WebDev}
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
