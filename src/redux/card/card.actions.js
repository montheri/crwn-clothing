import { CardActionTypes } from './cardActions.type'

export const toggleCardHidden = (card) => ({
   type: CardActionTypes.TOGGLE_CARD_HIDDEN
})

export const addItem = (item) => ({
   type: CardActionTypes.ADD_ITEM,
   payload: item

})