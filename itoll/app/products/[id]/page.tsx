import { getProductById } from "@/app/api/products";
import Image from "next/image";

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(Number(params.id));

  if (!product) {
    return <h1>Product not found!</h1>;
  }

  return (
    <div className="flex flex-row justify-between w-5/6 mx-auto items-center">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={150}
        height={150}
        className="object-contain w-1/2 h-[700px] p-4"
      />
      <div>
        <h1 className="text-black text-6xl">{product.name}</h1>
        <p className="text-black max-w-4/5 mt-5">{product.description}</p>
        <p className="text-black font-bold text-2xl mt-5">
          Price: {product.price}
        </p>
      </div>
    </div>
  );
}
