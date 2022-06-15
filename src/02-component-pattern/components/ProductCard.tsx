import { createContext } from "react";

import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { Product, ProductCardProps } from "../interfaces/interfaces";

interface ProductContextProps {
  product: Product;
  counter: number;
  increaseBy: (value: number) => void;
}

export const ProductContext = createContext({} as ProductContextProps);

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <ProductContext.Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </ProductContext.Provider>
  );
};

export default ProductCard;
