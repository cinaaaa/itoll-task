"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useDebounce from "@/app/hooks/useDebounce"; // Adjust the import path based on your project structure
import { searchProducts } from "@/app/api/products";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
  rating: { rate: number; count: number };
}

const Search: React.FC = () => {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    // Function to filter products based on the debounced search query
    const fetchProducts = async () => {
      if (debouncedQuery.trim()) {
        const products = await searchProducts(debouncedQuery);
        setFilteredProducts(products);
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

      {query && (
        <ul className="absolute z-10 right-10 bg-white border border-gray-300 w-[426px] top-26 rounded-lg max-h-60 overflow-y-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <li className="p-2 cursor-pointer hover:bg-gray-100 text-black flex flex-row items-center">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={40}
                    height={40}
                    className="object-contain w-[100px] h-[100px] p-4"
                  />
                  <div>
                    <h3 className="text-lg">{product.name}</h3>
                    <p className="font-bold">{product.price}</p>
                  </div>
                </li>
              </Link>
            ))
          ) : (
            <li className="p-2 text-center text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Search;
