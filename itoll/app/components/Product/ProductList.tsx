import ProductItem from "./ProductItem";

export default function ProductList({ products }: { products: any[] }) {
  return (
    <section className="flex flex-row flex-wrap w-5/6 mx-auto justify-between max-sm:justify-center">
      {products.map((product, index) => (
        <ProductItem key={product.id} product={product} index={index} />
      ))}
    </section>
  );
}
