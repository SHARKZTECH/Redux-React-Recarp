import "./styles.css";
import { Container } from "react-bootstrap";
import Products from "./components/Products";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";

export default function App() {
  return (
    <Container>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Products />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </Container>
  );
}
