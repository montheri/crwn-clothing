const INIT_STATE = {
    currentUser: null
}

const userReducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
<<<<<<< HEAD
                currentUser: action.payloa
=======
                currentUser: action.payload
>>>>>>> 125017d06aa19756aa5a8945812329bab6633eca
            }

        default : 
            return state;
    }
}

export default userReducer