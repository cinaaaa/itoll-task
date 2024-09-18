import Link from "next/link";
import Image from "next/image";
import { Text } from "@/app/components/common";
import { Product } from "@/app/types/product";

interface ProductItemProps {
  product: Product;
  index: number;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, index }) => {
  return (
    <Link
      className="w-3/12 min-w-[300px] flex flex-col h-[430px] border-2 hover:border-black justify-between"
      href={`/products/${product.id}`}
      /** To load the items faster, as we have low QU of items */
      prefetch
    >
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={200}
        height={200}
        loading={
          // Very first images fast but the others lazy
          index > 8 ? "lazy" : "eager"
        }
        className="object-contain w-full h-[200px] p-4"
      />
      <section className="flex flex-col h-[200px] justify-between p-4">
        <Text size="2xl">{product.name}</Text>
        <Text size="sm">{product.description}</Text>
        {/* <div className="justify-end flex items-end">
          <Text size="md">{product.price + "$"}</Text>
        </div> */}
      </section>
    </Link>
  );
};

export default ProductItem;
