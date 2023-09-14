import { GET_PRODUCT, CREATE_PRODUCT } from "./types";
import axios from "axios";

//fetch Data
export const getProducts = () => (dispatch) => {
  axios
    .get("http://localhost:5000/api/products")
    .then((res) => dispatch({ type: GET_PRODUCT, payload: res.data }))
    .catch((err) => console.log(err));
};

//add new Products
export const addProducts = (newProduct) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/products", newProduct)
    .then((res) => dispatch({ type: CREATE_PRODUCT, payload: res.data }))
    .catch((err) => console.log(err));
};
