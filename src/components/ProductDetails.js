import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const params = useParams();
  const id = params.id;

  return (
    <Row>
      <Col>product {id}</Col>
    </Row>
  );
};
export default ProductDetails;
