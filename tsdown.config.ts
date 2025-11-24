import { defineConfig } from "tsdown"

const env = process.env.NODE_ENV

export default defineConfig({
  entry: ["src/index.ts", "src/**/*.ts"],
  format: ["esm"],
  dts: true,
  clean: true,
  sourcemap: true,
  minify: env === "production",
  target: "es2020",
  outDir: env === "production" ? "dist" : "lib",
  outExtensions: () => ({
    js: ".js",
    dts: ".d.ts",
  }),
})
