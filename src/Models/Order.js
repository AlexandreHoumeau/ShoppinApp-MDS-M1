import { Model } from "./base.js";

export class Order extends Model{
  get defaults() {
    return {
      id: '_' + Math.random().toString(36).substr(2, 9),
      user: "user",
      items: [],
      totalCost: "",
      _createdAt: new Date(Date.now()),
    };
  }
}