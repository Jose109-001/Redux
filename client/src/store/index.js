import { createStore } from 'redux';
import reducer from '../reducer';

const initialState = {
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: '',
};

export default createStore(reducer, initialState);
