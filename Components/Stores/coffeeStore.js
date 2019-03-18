import React, { Component } from "react";
import { decorate, computed, observable } from "mobx";
import axios from "axios";

class CoffeeStore {
  coffeeShops = null;
  coffeeShop = null;
  loading = true;

  fetchAllCoffeeShops = async () => {
    try {
      const res = await axios.get("http://coffee.q8fawazo.me/api/?format=json");
      const data = res.data;
      this.coffeeShops = data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };
}

decorate(CoffeeStore, {
  coffeeShops: observable,
  coffeeShop: observable,
  loading: observable
});

const coffeeStore = new CoffeeStore();
coffeeStore.fetchAllCoffeeShops();

export default coffeeStore;
