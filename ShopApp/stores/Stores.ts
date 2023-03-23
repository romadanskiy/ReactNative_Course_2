import React from 'react';

import RootStore from './RootStore';

const rootStore = new RootStore();

export const stores = Object.freeze({
  rootStore: rootStore,
  cartStore: rootStore.cartStore,
  favoriteStore: rootStore.favoriteStore,
  productStore: rootStore.productStore,
});

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;