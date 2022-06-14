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

interface ProductButtonsProps {
  counter: number;
  increaseBy: (value: number) => void;
}

export const ProductImage = ({ image }: { image?: string }) => {
  return (
    <img className={styles.productImg} src={image ? image : noImage} alt="" />
  );
};

export const ProductTitle = ({ title }: { title: string }) => {
  return <span className={styles.productDescription}>{title}</span>;
};

export const ProductButtons = ({
  counter,
  increaseBy,
}: ProductButtonsProps) => {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  );
};

export default function ProductCard({ product }: Props) {
  const { counter, increaseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      <ProductImage image={product.image} />

      <ProductTitle title={product.title} />

      <ProductButtons counter={counter} increaseBy={increaseBy} />
    </div>
  );
}
