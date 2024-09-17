import ProductItem from "./ProductItem";

export default function ProductList({ products }: { products: any[] }) {
  return (
    <section className="flex flex-row flex-wrap px-20 gax-x-10 gap-y-10">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </section>
  );
}
