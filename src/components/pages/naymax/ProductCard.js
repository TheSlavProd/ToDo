import { Row, Col, Button, Card } from "react-bootstrap";
import card from "../../../images/card.jpeg";
import nsm from "../../../images/nsm.jpg";
import printer from "../../../images/printer.png";
import armrobot from "../../../images/armrobot.jpg";
function ProductCard() {
  return (
    <Row className="mt-3">
      <Col className="mb-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={nsm} />
          <Card.Body>
            <Card.Title>NCM 1.0</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">DOWNLOAD PARTS</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col className="mb-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={printer} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col className="mb-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={armrobot} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default ProductCard;
