import { Row, Col, Card, Container } from "react-bootstrap";
import PHP from "../assets/PHP.svg";
import ExpressJS from "../assets/ExpressJS.svg";
import Laravel from "../assets/Laravel.svg";
import MongoDB from "../assets/MongoDB.svg";
import MySQL from "../assets/MySQL.svg";
import NodeJS from "../assets/NodeJS.svg";
import Python from "../assets/Python.svg";
import ReactJS from "../assets/ReactJS.svg";

export default function Skill() {
  const skill = [
    PHP,
    ExpressJS,
    Laravel,
    MongoDB,
    MySQL,
    NodeJS,
    Python,
    ReactJS,
  ];

  const skillNames = skill.map((e) => {
    if (typeof e == "string") {
      const splited = e.split("/");
      const name = splited[3];
      console.log("name: ", name);
      const skillname = name.split(".");
      return skillname[0];
    } else {
      return "";
    }
  });

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
                      src={skill[idx]}
                      style={{ maxWidth: "50px" }}
                    />
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Title className="text-center">
                        {skillNames[idx]}
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
