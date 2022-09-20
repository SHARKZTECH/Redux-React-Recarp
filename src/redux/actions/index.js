export const getProducts = () => {
  return async (dispatch) => {
    dispatch({ type: "REQUEST_PRODUCTS", loading: true });

    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    dispatch({
      type: "GET_PRODUCTS",
      payload: data
    });
  };
};

export const getProduct = (id) => {
  return async (dispatch) => {
    dispatch({ type: "REQUEST_PRODUCT", loading: true });

    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();

    dispatch({
      type: "GET_PRODUCT",
      payload: data
    });
  };
};
