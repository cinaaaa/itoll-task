import Link from "next/link";
import Image from "next/image";

export default function ProductItem({ product }: { product: any }) {
  return (
    <Link
      className="w-3/12 min-w-[300px] flex flex-col h-[430px] border-2 hover:border-black justify-between"
      href={`/products/${product.id}`}
      /** To load the items faster, as we have low Q of items */
      prefetch
    >
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={150}
        height={150}
        className="object-contain w-full h-[200px] p-4"
      />
      <section className="flex flex-col h-[200px] justify-between p-4">
        <h2 className="text-black text-2xl font-bold">{product.name}</h2>
        <p className="text-black">{product.description}</p>
        <p className="justify-end flex items-end text-black font-bold">
          {product.price + "$"}
        </p>
      </section>
    </Link>
  );
}
