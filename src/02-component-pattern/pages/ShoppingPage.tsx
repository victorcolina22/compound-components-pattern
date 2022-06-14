import ProductCard from "../components/ProductCard";

const product = {
  id: 1,
  title: "coffee mug",
  image: "./coffee-mug.png",
};

export default function ShoppingPage() {
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
        <ProductCard product={product} />
      </div>
    </div>
  );
}
