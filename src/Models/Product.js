import { Model } from "./base.js";

export class Product extends Model{
  get defaults() {
    return {
      id: "",
      user: "",
      title: "",
      photo: "",
      content: "",
      price: "",
    };
  }
}