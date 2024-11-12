"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Product } from "@/types/generated";

type ProductCardProps = {
  product: Product;
  index: number;
  totalProducts: number;
};

export default function ProductCard({
  product,
  index,
  totalProducts,
}: ProductCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/${product.handle}`);
    console.log(product);
  };

  return (
    <li
      key={product.id}
      className={`border-foreground p-4 ${index % 3 !== 2 ? "border-r" : ""} ${index < totalProducts - 3 ? "border-b" : ""} min-h-[550px]`}
      onClick={handleClick}
    >
      {/* Todo: Use Next Image component */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={product.images.edges[0]?.node.src}
        height={300}
        width={300}
        alt={product.title}
        className="m-auto"
      />

      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>
          Price: {product.priceRange.minVariantPrice.amount}{" "}
          {product.priceRange.minVariantPrice.currencyCode}
        </p>
      </div>
    </li>
  );
}
