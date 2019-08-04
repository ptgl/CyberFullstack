var randomId = require("random-id");

const ProductData = [
  {
    id: randomId(5, "0"),
    name: "Ao thun",
    description: "Ao thun",
    price: 10,
    rating: 1,
    sizes: ["S", "XS", "ML"],
    image: "img1.jpg"
  },
  {
    id: randomId(5, "0"),
    name: "Dam",
    description: "Design UI/UX",
    price: 20,
    rating: 1,
    sizes: ["S", "XL"],
    image: "img2.jpg"
  },
  {
    id: randomId(5, "0"),
    name: "Ao so mi T shirt",
    description: "Design UI/UX",
    price: 12,
    rating: 1,
    sizes: ["M", "L"],
    image: "img3.jpg"
  },
  {
    id: randomId(5, "0"),
    name: "Quan tay",
    description: "Design UI/UX",
    price: 30,
    rating: 1,
    sizes: ["S", "M"],
    image: "img5.jpg"
  },
  {
    id: randomId(5, "0"),
    name: "Code Backend",
    description: "Code Backend",
    price: 10000,
    rating: 1,
    sizes: ["L", "XL"],
    image: "img4.jpg"
  },
  {
    id: randomId(5, "0"),
    name: "Fix bug Login",
    description: "Fix bug Login",
    price: 10,
    rating: 1,
    sizes: ["S", "XS"],
    image: "img1.jpg"
  }
];
export default ProductData;
