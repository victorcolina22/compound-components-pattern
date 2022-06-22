import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";

import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";

export default function ShoppingPage() {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark text-white"
            style={{ width: "100px" }}
            onChange={onProductCountChange}
            value={product.count}
          >
            <ProductImage className="custom-image" />
            {/* <ProductTitle title={`${product.count}`} /> */}
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}

        {/* <ProductCard
          product={product}
          className="bg-dark text-white"
          style={{ width: "100px" }}
          onChange={onProductCountChange}
        >
          <ProductImage className="custom-image" />
          <ProductTitle />
          <ProductButtons className="custom-buttons" />
        </ProductCard> */}
      </div>
    </div>
  );
}
