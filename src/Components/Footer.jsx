import { Card } from "react-bootstrap";

export default function Footer() {
  return (
    <Card className="text-center" style={{ backgroundColor: "#132D51" }}>
      <Card.Footer className="text-muted">
        <p className="text-light">©farhan mualif</p>
      </Card.Footer>
    </Card>
  );
}
