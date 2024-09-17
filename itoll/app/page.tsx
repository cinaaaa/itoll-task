import ProductList from "@/app/components/Product/ProductList";
import { getAllProducts } from "@/app/api/products";
import { unstable_cache } from "next/cache";
import Search from "./components/Product/Search";
import Header from "@/app/components/common/Header";

const getCachedPosts = unstable_cache(
  async () => {
    return await getAllProducts();
  },
  ["posts"],
  { revalidate: 3600, tags: ["posts"] },
);

export default async function HomePage() {
  const products = await getCachedPosts();

  return (
    <main>
      <ProductList products={products} />
    </main>
  );
}
