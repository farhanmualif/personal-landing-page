import { Form, Row, Col, Button, Container } from "react-bootstrap";

export default function Contact() {
  return (
    <div
      id="contact"
      style={{ backgroundColor: "#FFF", paddingBottom: "3rem" }}>
      <h2 className="text-center py-5">Contact Us</h2>
      <Container>
        <Form>
          <Row className="mb-4">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control size="lg" type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control size="lg" type="text" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-4" controlId="formGridSubject1">
            <Form.Label>Subject</Form.Label>
            <Form.Control size="lg" type="text" />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formGridMessgae">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
