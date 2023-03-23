import { makeAutoObservable } from 'mobx'

import RootStore from './RootStore';

export default class CartStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }
}