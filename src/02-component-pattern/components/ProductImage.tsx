import { useContext } from "react";

import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export interface ProductImageProps {
  className?: string;
  image?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({
  image,
  className,
  style,
}: ProductImageProps) => {
  const { product } = useContext(ProductContext);
  let imageToShow: string;

  if (image) {
    imageToShow = image;
  } else if (product.image) {
    imageToShow = product.image;
  } else {
    imageToShow = noImage;
  }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imageToShow}
      alt=""
      style={style}
    />
  );
};

export default ProductImage;
