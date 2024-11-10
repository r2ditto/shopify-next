import { GraphQLClient } from "graphql-request";

const endpoint = `https://${process.env.STORE_NAME}.myshopify.com/api/${process.env.API_VERSION}/graphql.json`;

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    "Content-Type": "application/json",
    "X-Shopify-Storefront-Access-Token": process.env.PUBLIC_ACCESS_TOKEN || "",
  },
});
