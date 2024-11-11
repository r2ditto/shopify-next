import { gql } from "graphql-tag";
import { graphQLClient } from "@/lib/graphqlClient";
import { Product } from "@/types/generated";

const query = gql`
  query GetProducts {
    products(first: 10) {
      edges {
        node {
          id
          title
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                src
              }
            }
          }
        }
      }
    }
  }
`;

async function fetchProducts(): Promise<Product[]> {
  const data = await graphQLClient.request<{
    products: { edges: { node: Product }[] };
  }>(query);

  return data.products.edges.map((edge: { node: Product }) => edge.node);
}

export default async function Home() {
  const products = await fetchProducts();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <h2>Products</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                {/* Todo: Use Next Image component */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.images.edges[0]?.node.src}
                  height={300}
                  width={300}
                  alt={product.title}
                />
                <p>
                  Price: {product.priceRange.minVariantPrice.amount}{" "}
                  {product.priceRange.minVariantPrice.currencyCode}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
