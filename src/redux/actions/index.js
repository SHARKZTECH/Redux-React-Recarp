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
