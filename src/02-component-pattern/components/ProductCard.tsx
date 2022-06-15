import { createContext } from "react";

import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { Product, ProductCardProps } from "../interfaces/interfaces";

import "../styles/custom-styles.css";

interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (value: number) => void;
}

export const ProductContext = createContext({} as ProductContextProps);

export const ProductCard = ({
  product,
  children,
  className,
  style,
}: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <ProductContext.Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </ProductContext.Provider>
  );
};

export default ProductCard;
