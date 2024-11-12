import ProductCard from "./ProductCard";

import { Product } from "@/types/generated";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <ul className="my-8 grid grid-cols-1 border-b border-t border-foreground md:grid-cols-3">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          index={index}
          totalProducts={products.length}
        />
      ))}
    </ul>
  );
}
