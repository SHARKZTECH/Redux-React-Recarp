import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
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
  }, []);
  console.log(products);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
