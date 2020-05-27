import { createSelector } from 'reselect'



const selectShop = state => state.shop

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectColloection = collectionUrlParam => createSelector(
    [selectShopCollections],
    collections =>(collections ? collections[collectionUrlParam] : null)
    //collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)