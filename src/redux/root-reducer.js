import { combineReducers } from 'redux';

import userReducer from '../redux/user/user.reducer';
import cardReducer from '../redux/card/card.reducer'

export default combineReducers({
    user : userReducer,
    card : cardReducer
})

