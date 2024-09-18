import { ProductList } from "@/app/components/Product";
import { getAllProducts } from "@/app/api/products";
import { unstable_cache } from "next/cache";

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
