import { CardActionTypes } from './cardActions.type'

const INITIAL_STATE= {
    hidden : true,
    cardItem: []
}

const cardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CardActionTypes.TOGGLE_CARD_HIDDEN :
            return {
                ...state, 
                hidden : !state.hidden
            }
        case CardActionTypes.ADD_ITEM :
            return {
                ...state,
                cardItem: [...state.cardItem, action.payload]
            }
        default:
            return state;

    }
}

export default cardReducer