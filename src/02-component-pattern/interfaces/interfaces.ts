import { ProductButtonsProps } from "../components/ProductButtons";
import { ProductImageProps } from "../components/ProductImage";
import { ProductTitleProps } from "../components/ProductTitle";

export interface Product {
  id: number;
  title: string;
  image?: string;
}

export interface ProductCardProps {
  product: Product;
  children?: React.ReactElement | React.ReactElement[];
  className?: string
  style?: React.CSSProperties
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element
  Title: (Props: ProductTitleProps) => JSX.Element
  Image: (Props: ProductImageProps) => JSX.Element
  Buttons: (Props: ProductButtonsProps) => JSX.Element
}