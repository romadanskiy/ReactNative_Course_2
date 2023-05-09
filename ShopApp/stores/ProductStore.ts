import { makeAutoObservable } from 'mobx'

import RootStore from './RootStore';
import IProduct from '../models/IProduct';
import productModels from '../models/Products';

export default class ProductStore {
  rootStore: RootStore;
  products: IProduct[] = []

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.products = productModels;
    makeAutoObservable(this);
  }

  getProduct = (id: string) => {
    return this.products.find(product => product.id === id);
  }

  changeIsFavorite = (id: string, isFavorite: boolean) => {
    let newProducts = [...this.products];
    let product = newProducts.find(product => product.id === id);
    if (product === undefined || product.isFavorite == isFavorite)
      return;

    product.isFavorite = isFavorite;
    this.products = newProducts;
  }

  changeIsInCart = (id: string, isInCart: boolean) => {
    let newProducts = [...this.products];
    let product = newProducts.find(product => product.id === id);
    if (product === undefined || product.isInCart == isInCart)
      return;

    product.isInCart = isInCart;
    this.products = newProducts;
  }
}