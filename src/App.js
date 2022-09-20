import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
export default function App() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    dispatch({
      type: "GET_PRODUCTS",
      payload: data
    });
  };

  useEffect(() => {
    getProducts();
  });

  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col md={3} lg={4}>
            <Card className="mb-3" style={{ height: "450px" }}>
              <Card.Img
                src={product.image}
                alt="product"
                width={200}
                height={300}
              />
              <Card.Body>
                <p>${product.price}</p>
                <p>{product.title}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
