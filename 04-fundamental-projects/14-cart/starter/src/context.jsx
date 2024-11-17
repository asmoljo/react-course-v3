import { useContext, useReducer, useEffect, createContext } from 'react';
import reducer from './reducer';
import { CLEAR_CART, REMOVE, INCREASE, DECREASE } from './actions';
import cartItems from './data';

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const remove = (id) => {
    //ovaj payload ispod je samo convetion kako kaze John, a inace se se moze i samo 'id' poslati ili sto drugo se vec salje..
    dispatch({ type: REMOVE, payload: { id } });
  };

  return (
    <AppContext.Provider value={{ ...state, clearCart, remove }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
