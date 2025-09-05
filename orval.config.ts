import { defineConfig } from "orval";

export default defineConfig({
  sampleApi: {
    input: "./openapi.yaml", // OpenAPIファイルのパス
    output: {
      target: "./src/api/generated.ts", // 出力するTSファイル
      // client: "fetch", // fetchベースのクライアント
      client: "swr",
      baseUrl: "/api",
      mock: true,
    },
  },
});
