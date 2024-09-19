import Image from "next/image";
import NotFound from "@/app/not-found";
import { Text } from "@/app/components/common";
import { getProductById } from "@/app/api/products";

interface ProductsDetailPage {
  params: { id: string };
}

const ProductDetailPage: React.FC<ProductsDetailPage> = ({ params }) => {
  const product = getProductById(Number(params.id));

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-row justify-between w-5/6 mx-auto items-center gap-x-20 h-[100vh] max-sm:flex-col max-sm:justify-start">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={200}
        height={200}
        className="object-contain w-2/5 h-1/2 p-4 min-w-[200px]"
      />
      <div>
        <p className="text-6xl text-black">{product.name}</p>
        <div className="text-black max-w-4/5 my-5">
          <Text>{product.description}</Text>
        </div>
        <Text size="2xl">Price: {product.price}</Text>
      </div>
    </div>
  );
};

export default ProductDetailPage;
