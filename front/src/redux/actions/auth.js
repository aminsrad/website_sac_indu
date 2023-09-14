import { LOGIN_SUCCESS, LOGOUT } from "./types";
import axios from "axios";
// export const auth = (newAuth) => (dispatch) => {
//   axios
//     .post("http://localhost:5000/api/login", newAuth)
//     .then((res) => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
//     .catch((err) => console.log(err));
// };
export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const logout = () => ({
  type: LOGOUT,
});

export const login = (credentials) => async (dispatch) => {
  console.log(credentials);
  try {
    const response = await axios.post(
      "http://localhost:5000/api/login",
      credentials
    ); // Adjust the API endpoint
    const token = response.data.token;
    localStorage.setItem("token", token);
    console.log("Login successful");
    dispatch(loginSuccess(token));
  } catch (error) {
    // Handle login error
  }
};
