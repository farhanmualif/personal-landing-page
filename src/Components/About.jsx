import { Col, Container, Image, Row } from "react-bootstrap";

export default function About() {
  return (
    <div style={{ maxWidth: "99%" }}>
      <Row
        style={{
          padding: "7% 0 7% 0",
          backgroundColor: "#F9F9FB",
        }}>
        <Col className="d-flex align-items-center" id="about">
          <Container style={{ maxWidth: "80%" }}>
            <p className="fs-4 justify-content-center">
              <h2>About me</h2>
              Hello, Im Farhan Mualif, Im an active student at Yogyakarta
              University of Technology majoring in informatics. As an
              informatics student passionate about web development, I have a
              strong dedication to exploring the ever-evolving world of
              technology.
            </p>
          </Container>
        </Col>
        <Col>
          <Image
            src="/src/assets/picture1.png"
            style={{ height: "auto", width: "600px" }}
          />
        </Col>
      </Row>
    </div>
  );
}
