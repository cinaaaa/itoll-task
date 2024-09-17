import ProductList from "@/app/components/ProductList";
import { getAllProducts } from "@/app/api/products";

export default async function HomePage() {
  const products = await getAllProducts();

  return (
    <main>
      <h1>Product List</h1>
      <ProductList products={products} />
    </main>
  );
}
