import { CLEAR_CART, REMOVE, INCREASE, DECREASE } from './actions';

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE) {
    //u JS se nikad ne mijenja trenutno stanje, nego se kopira postojeci MAp, Array... pa se izmijeni na kopiji i onda se taj novi spremi na
    //mjesto starog .Tako se izbjegavaju mogucnosti Bug-ova, a ako se i pojavi Bug onda ga je puno lakse naci i popraviti
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }
  if (action.type === INCREASE) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);
    const newItem = { ...item, amount: item.amount + 1 };
    newCart.set(itemId, newItem);
    return { ...state, cart: newCart };
  }
  if (action.type === DECREASE) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);
    //ako je amount trenutno jedan i idemo na decrease tj. -1 onda je to 0 i ustvari onda brisemo item iz charta
    if (item.amount === 1) {
      newCart.delete(action.payload.id);
      return { ...state, cart: newCart };
    }

    const newItem = { ...item, amount: item.amount - 1 };
    newCart.set(itemId, newItem);
    return { ...state, cart: newCart };
  }
  throw new Error(`no matching action type: ${action.type}`);
};

export default reducer;
