import { Col, Container, Image, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import scrollTo from "../helper/scroll-to";

export default function Jumbotron() {
  return (
    <>
      <div className="jumbotron justify-content-center">
        <Container id="home" style={{ margin: "4% 0 4% 0" }}>
          <Row>
            <Col className="text-center">
              <Image
                src="public/figure1.png"
                alt="profile-image"
                className="img-fluid"
                style={{
                  maxWidth: "510px",
                  height: "auto",
                }}
              />
            </Col>
            <Col className="d-flex align-items-center">
              <Container className="aboutme">
                <h1 className="display-4 text-start">
                  Hello, Iam Farhan Mualif!
                </h1>
                <hr />
                <p className="fs-3">Web Developer</p>
                <Button
                  size="lg"
                  onClick={function () {
                    scrollTo("about");
                  }}>
                  Read More
                </Button>
                {""}
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
