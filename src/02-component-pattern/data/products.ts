import { Product } from "../interfaces/interfaces";

const product = {
  id: 1,
  title: "coffee mug",
  image: "./coffee-mug.png",
};

const product2 = {
  id: 2,
  title: "coffee mug meme",
  image: "./coffee-mug2.png",
};

export const products: Product[] = [product, product2];