
import ShopActionType from '../shop/shop.types'

export const updateCollections = (collectionsMap) => ({
    type: ShopActionType.UPDATE_COLLECTIONS,
    payload: collectionsMap

})