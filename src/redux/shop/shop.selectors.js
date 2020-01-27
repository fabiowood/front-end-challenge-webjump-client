import { createSelector } from 'reselect';

export const selectCollections = state => state.shop;

export const selectCollectionNames = createSelector(
  [selectCollections],
  shop => shop.collectionNames
);

export const CheckShopPage = createSelector(
  [selectCollections],
  shop => shop.isOutsideShopPage
)
