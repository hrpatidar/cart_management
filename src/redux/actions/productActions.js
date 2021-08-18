import { PRODUCTS, UPDATE_CART } from "./types"
import data from '../../assets/data.json';

export const getProducts = () => (dispatch) => {
   dispatch({ type: PRODUCTS,  data })
};

export const updateActiveCart = (data) => (dispatch) => {
    dispatch({ type: UPDATE_CART,  data })
 };
