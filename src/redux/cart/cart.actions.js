import { CartActionTypes } from './cartActions.type'

export const toggleCartHidden = (cart) => ({
   type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
   type: CartActionTypes.ADD_ITEM,
   payload: item

})