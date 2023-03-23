import { makeAutoObservable } from 'mobx'

import RootStore from './RootStore';

export default class ProductStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }
}