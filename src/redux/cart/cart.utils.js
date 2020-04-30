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