import { makeAutoObservable } from 'mobx'

import RootStore from './RootStore';
import ICountedProduct from '../models/ICountedProduct';

export default class CartStore {
  rootStore: RootStore;
  products: ICountedProduct[] = []

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  totalCount = () => {
    let count = 0;
    this.products.forEach(countedProduct => {
      count += countedProduct.count;
    });

    return count;
  }

  totalPrice = () => {
    let price = 0;
    this.products.forEach(countedProduct => {
      price += countedProduct.product.price * countedProduct.count;
    });

    return price;
  }

  changeCount = (id: string, count: number) => {
    let newProducts = [...this.products];
    let product = newProducts.find(countedProduct => countedProduct.product.id === id);
    if (product === undefined || product.count == count)
      return;

    if (count < 1)
      return;

    product.count = count;
    this.products = newProducts;
  }

  increaseCount = (id: string) => {
    let newProducts = [...this.products];
    let product = newProducts.find(countedProduct => countedProduct.product.id === id);
    if (product === undefined)
      return;

    let newCount = product.count + 1;
    if (newCount > 20)
      return;

    product.count = newCount;
    this.products = newProducts;
  }

  decreaseCount = (id: string) => {
    let newProducts = [...this.products];
    let product = newProducts.find(countedProduct => countedProduct.product.id === id);
    if (product === undefined)
      return;

    let newCount = product.count - 1;
    if (newCount < 1)
      return;

    product.count = newCount;
    this.products = newProducts;
  }

  addProductToCart = (id: string) => {
    let product = this.rootStore.productStore.getProduct(id);
    if (product === undefined || !product.isInCart)
      return;

    let newProduct: ICountedProduct = { product: product, count: 1 };
    let newProducts = [...this.products, newProduct];
    this.products = newProducts;
  }

  removeProductFromCart = (id: string) => {
    let product = this.rootStore.productStore.getProduct(id);
    if (product === undefined || product.isInCart)
      return;

    let newProducts = this.products.filter(countedProduct => countedProduct.product.id != id);
    this.products = newProducts;
  }
}