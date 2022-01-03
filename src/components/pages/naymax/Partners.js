import { Row, Col, Figure } from "react-bootstrap";
import armat from "../../../images/armat.jpg";
import uate from "../../../images/uate.png";
import energy from "../../../images/energy.jpg";
function Partners() {
  return (
    <Row style={{ backgroundColor: "#F7F7F7" }}>
      <Col xs={12}>
        <h2>Our Partners</h2>
        <p>
          We cooperate with leading Armenian IT companies. The educational
          programs fully meet the requirements of the tech industry.
        </p>
      </Col>
      <Col className="justify-content-center">
        <Figure className="m-2">
          <Figure.Image width={171} height={180} alt="171x180" src={armat} />
        </Figure>

        <Figure className="m-2">
          <Figure.Image width={171} height={180} alt="171x180" src={energy} />
        </Figure>
        <Figure className="m-2">
          <Figure.Image width={171} height={180} alt="171x180" src={uate} />
        </Figure>
      </Col>
    </Row>
  );
}

export default Partners;
