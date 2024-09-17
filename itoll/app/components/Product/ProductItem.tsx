import Link from "next/link";
import Image from "next/image";

export default function ProductItem({ product }: { product: any }) {
  return (
    <Link
      className="w-1/3 p-5 h-[400px] border-black border-2 hover:border-10"
      href={`/products/${product.id}`}
    >
      <div>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={100}
          height={100}
          className="object-cover"
        />
        <h2 className="text-black text-2xl font-bold">{product.name}</h2>
        <p className="text-black">{product.description}</p>
        <p>{product.price}</p>
      </div>
    </Link>
  );
}
