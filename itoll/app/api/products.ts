import { Product, ProductArray } from "@/app/types/product";

export const products: ProductArray = [
  {
    id: 1,
    name: "Fjallraven",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    name: "Mens Casual",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfor",
    imageUrl:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: 3,
    name: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing,",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
  {
    id: 4,
    name: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore,",
    imageUrl: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  },
  {
    id: 5,
    name: "John Hardy Women's",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing ",
    imageUrl:
      "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 6,
    name: "Solid Gold Petite ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    imageUrl:
      "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 7,
    name: "White Gold Plated",
    price: 9.99,
    description:
      "Classic Created Wedding Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    imageUrl:
      "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 8,
    name: "Pierced Owl Rose",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    imageUrl:
      "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 9,
    name: "WD 2TB",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for ",

    imageUrl: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  },
  {
    id: 10,
    name: "SanDisk SSD PLUS ",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RP",

    imageUrl: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
  },
  {
    id: 11,
    name: "Silicon Power",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootupbility.",

    imageUrl: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
  },
  {
    id: 12,
    name: "WD 4TB Gaming",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",

    imageUrl: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
  },
  {
    id: 13,
    name: "Acer SB220Q bi 21",
    price: 599,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibili",

    imageUrl: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
  },
  {
    id: 14,
    name: "Samsung 49-Inch ",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR su",

    imageUrl: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
  },
  {
    id: 15,
    name: "BIYLACLESEN Women's 3-in-1",
    price: 56.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: ",
    imageUrl: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  },
  {
    id: 16,
    name: "Lock and Love Women's ",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) / 2 pockets of front",
    imageUrl: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
  },
];

// Function to define a generic Promise response for products
const productPromise = (data: ProductArray | undefined) =>
  Promise.resolve(data);

// Fetch all products
export const getAllProducts: () => Promise<ProductArray | undefined> = () =>
  productPromise(products);

// Fetch product by ID
export const getProductById: (id: number) => Product | undefined = (id) =>
  products.find((product) => product.id === id);

// Function to search products (using optional chaining)
export const searchProducts: (
  query: string,
) => Promise<ProductArray | undefined> = (query) => {
  if (!query) return productPromise([]);
  const lowerCaseQuery = query.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name?.toLowerCase().includes(lowerCaseQuery),
  );
  return productPromise(filteredProducts);
};
