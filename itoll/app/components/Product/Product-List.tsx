import { ProductArray } from "@/app/types/product";
import { Text } from "@/app/components/common";
import ProductItem from "./Product-Item";

interface ProductListProps {
  products: ProductArray | undefined;
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <section className="flex flex-row flex-wrap w-5/6 mx-auto justify-between max-sm:justify-center">
      {products?.map((product, index) => (
        <ProductItem key={product.id} product={product} index={index} />
      ))}
      {!products?.length && <Text>No products found!</Text>}
    </section>
  );
};

export default ProductList;
