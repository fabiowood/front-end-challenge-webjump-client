import { shopActionTypes } from './shop.action.types';

export const fetchCollectionNames = () => {
  return ({
    type: shopActionTypes.FETCH_COLLECTION_NAMES
  })
};

export const isOutsideShopPage = (status) => {
  return ({
    type: shopActionTypes.CHECK_SHOP_PAGE,
    payload: status
  })
};