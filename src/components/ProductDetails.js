import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getProduct } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const ProductDetails = () => {
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.product);
  console.log(product);

  useEffect(() => {
    dispatch({ type: "RESET_PRODUCT" });
    dispatch(getProduct(id));
  }, [id, dispatch]);

  return (
    <Row>
      <Col>product {id}</Col>
    </Row>
  );
};
export default ProductDetails;
