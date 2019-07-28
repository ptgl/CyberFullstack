var randomId = require("random-id");

export default class Product {
  constructor(id, name, desc, rate, price, size, img) {
    this.id = id || randomId(5, "0");
    this.name = name;
    this.desc = desc;
    this.rate = rate;
    this.price = price || 0;
    this.sizes = size;
    this.img = img;
  }
}
