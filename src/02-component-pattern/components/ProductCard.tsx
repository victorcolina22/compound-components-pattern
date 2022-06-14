import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useProduct } from "../hooks/useProduct";

interface Props {
  product: Product;
}

interface Product {
  id: number;
  title: string;
  image?: string;
}

export default function ProductCard({ product }: Props) {
  const { counter, increaseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImg}
        src={product.image ? product.image : noImage}
        alt=""
      />
      {/* <img className={styles.productImg} src={noImage} alt="" /> */}

      <span className={styles.productDescription}>{product.title}</span>

      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
          +
        </button>
      </div>
    </div>
  );
}
