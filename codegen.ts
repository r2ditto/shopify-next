import { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config();

const config: CodegenConfig = {
  schema: `https://${process.env.STORE_NAME}.myshopify.com/api/${process.env.API_VERSION}/graphql.json`,
  documents: "src/**/*.tsx",
  generates: {
    "src/types/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        documentMode: "string",
      },
    },
  },
  config: {
    headers: {
      "X-Shopify-Storefront-Access-Token": process.env.PUBLIC_ACCESS_TOKEN,
    },
  },
};

export default config;
