import {
  GET_ALL_RECETAS,
  INSERT_RECETA,
  RECETAS_LOADING
} from "../actions/types";

const initialState = {
  recetas: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RECETAS_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_ALL_RECETAS:
      return {
        ...state,
        recetas: action.payload,
        loading: false
      };
    case INSERT_RECETA: {
      let recetas = state.recetas;
      recetas.push(action.payload);
      return {
        ...state,
        recetas: recetas,
        loading: false
      };
    }

    default:
      return state;
  }
}
