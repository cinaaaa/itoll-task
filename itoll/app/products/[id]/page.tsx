import { getProductById } from "@/app/api/products";

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(Number(params.id));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <img src={product.imageUrl} alt={product.name} />
    </div>
  );
}
