var randomId = require("random-id");

export default class Product {
  constructor(id, name, description, rate, price, size, image) {
    this.id = id || randomId(5, "0");
    this.name = name;
    this.description = description;
    this.rate = rate;
    this.price = price || 0;
    this.sizes = size;
    this.image = image;
  }
}
