import axios from "axios";

import { GET_ALL_RECETAS, INSERT_RECETA, RECETAS_LOADING } from "./types";

// Get all recetas
export const getAllRecetas = () => dispatch => {
  dispatch(setRecetaLoading());
  axios
    .get("/api/recetas")
    .then(res => {
      dispatch({
        type: GET_ALL_RECETAS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response.data);
      dispatch({
        type: GET_ALL_RECETAS,
        payload: []
      });
    });
};

// Get all recetas
export const insertReceta = newReceta => dispatch => {
  dispatch(setRecetaLoading());
  axios
    .post("/api/recetas", newReceta)
    .then(res => {
      console.log(res);
      dispatch({
        type: INSERT_RECETA,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response.data);
      dispatch({
        type: GET_ALL_RECETAS,
        payload: []
      });
    });
};

// Profile loading
export const setRecetaLoading = () => {
  return {
    type: RECETAS_LOADING
  };
};
