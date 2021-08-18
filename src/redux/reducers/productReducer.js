import {PRODUCTS, ERROR, UPDATE_CART} from "../actions/types";

const initialState = {
   products: [],
   activeCart: [],
   error: ''
};


export default function productsReducer(state = initialState, action) {
   switch (action.type) {
       case PRODUCTS: {
           return {
               ...state,
               products: action.data.products,
           }
       }
       case UPDATE_CART: {
            return {
                ...state,
                activeCart: action.data,
            }
        }
       case ERROR: {
           return {
               ...state,
               error: action.error
           };
       }
       default: {
           return state;
       }
   }
}