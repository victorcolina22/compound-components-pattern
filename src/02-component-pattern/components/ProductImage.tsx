import { useContext } from "react";

import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export const ProductImage = ({ image }: { image?: string }) => {
  const { product } = useContext(ProductContext);
  let imageToShow: string;

  if (image) {
    imageToShow = image;
  } else if (product.image) {
    imageToShow = product.image;
  } else {
    imageToShow = noImage;
  }

  return <img className={styles.productImg} src={imageToShow} alt="" />;
};

export default ProductImage;
