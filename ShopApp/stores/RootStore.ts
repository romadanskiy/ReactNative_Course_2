import { makeAutoObservable } from 'mobx'

import CartStore from "./CartStore";
import FavoriteStore from './FavoriteStore';
import ProductStore from './ProductStore';

export default class RootStore {
  cartStore: CartStore;
  favoriteStore: FavoriteStore;
  productStore: ProductStore;

  constructor() {
    this.cartStore = new CartStore(this);
    this.favoriteStore = new FavoriteStore(this);
    this.productStore = new ProductStore(this);
    makeAutoObservable(this);
  }
}