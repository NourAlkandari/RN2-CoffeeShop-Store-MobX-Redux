import React, { Component } from "react";
import { decorate, computed, observable } from "mobx";

class CartStore {
  items = [
    {
      drink: "Latte",
      option: "Small",
      quantity: 2
    },
    {
      drink: "Espresso",
      option: "Large",
      quantity: 1
    }
  ];
}
decorate(CartStore, { items: observable });

const cartStore = new CartStore();

export default cartStore;
