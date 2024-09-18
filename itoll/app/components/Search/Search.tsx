"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useDebounce from "@/app/hooks/useDebounce"; // Adjust the import path based on your project structure
import { searchProducts } from "@/app/api/products";
import { ProductArray } from "@/app/types/product";
import { Text } from "@/app/components/common";

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [filteredProducts, setFilteredProducts] = useState<
    ProductArray | undefined
  >([]);

  const toggleSearchModal = (open: boolean) => setModalOpen(open);
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    // Function to filter products based on the debounced search query
    const fetchProducts = async () => {
      if (debouncedQuery.trim()) {
        const products = await searchProducts(debouncedQuery);
        setFilteredProducts(products);
        toggleSearchModal(true);
      } else {
        setFilteredProducts([]);
      }
    };

    fetchProducts();
  }, [debouncedQuery]);

  return (
    <div className="w-[400px] px-5 py-5 relative">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-black text-md text-black block w-full p-2.5 focus:outline-blue-700"
      />

      {query && filteredProducts && !!modalOpen && (
        <ul className="absolute z-10 bg-white border border-gray-300 w-[360px] top-26 rounded-lg max-h-60 overflow-y-auto p-2">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <li
                  className="p-2 cursor-pointer hover:bg-gray-100 text-black flex flex-row items-center"
                  onClick={() => toggleSearchModal(false)}
                >
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={40}
                    height={40}
                    className="object-contain w-[100px] h-[100px] p-4"
                  />
                  <div>
                    <Text size="lg">{product.name}</Text>
                    <Text>{product.price}</Text>
                  </div>
                </li>
              </Link>
            ))
          ) : (
            <Text size="xl">No results found</Text>
          )}
        </ul>
      )}
    </div>
  );
};

export default Search;
