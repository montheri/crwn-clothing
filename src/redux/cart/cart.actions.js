import { CartActionTypes } from './cartActions.type'

export const toggleCartHidden = (cart) => ({
   type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
   type: CartActionTypes.ADD_ITEM,
   payload: item

})

export const removeItem = (item) => ({
   type: CartActionTypes.REMOVE_ITEM,
   payload: item

})

export const clearItemFormCart = (item) => ({
   type: CartActionTypes.CLEAR_ITEM_FROM_CART,
   payload: item
})