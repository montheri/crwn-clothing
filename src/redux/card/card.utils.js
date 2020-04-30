export const addItemToCard = (cardItems, cardItemToAdd ) => {
    // check if it is exisit 
    const existingCardItem = cardItems.find(cardItem => cardItem.id === cardItemToAdd.id)
    console.log('existingCardItem', existingCardItem)

    //if the new item exsits in cardItems object, map the cardItems and add to the variable "quantity" else 
    if(existingCardItem) {
        return cardItems.map(cardItem => cardItem.id === cardItemToAdd.id ? {...cardItem, quantity: cardItem.quantity + 1} : cardItem)
    } else { //return cardItems with new item which doesn't exeists in the cardItems before 
        return [...cardItems, {...cardItemToAdd, quantity: 1}]
    }
   
}