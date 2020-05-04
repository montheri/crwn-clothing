export const addItemToCart = (cartItems, cartItemToAdd ) => {
    // check if it is exisit 
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)
    console.log('existingCartItem', existingCartItem)

    //if the new item exsits in cartItems object, map the cartItems and add to the variable "quantity" else 
    if(existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    } else { //return cartItems with new item which doesn't exeists in the cartItems before 
        return [...cartItems, {...cartItemToAdd, quantity: 1}]
    }
   
}


export const removeItemFromCart = (cartItems, cartItemToRemove ) => {
    // check if it is exisit 
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    //if card Item = 1
   
    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    //if the new item exsits in cartItems object, map the cartItems and add to the variable "quantity" else 
    if(existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem)
    }
   
}