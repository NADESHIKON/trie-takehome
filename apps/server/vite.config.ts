import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";

export default defineConfig({
    server: {
        port: Number(process.env.PORT) || 3000
    },
    plugins: [
        ...VitePluginNode({
            adapter: "fastify",
            appPath: "./src/index.ts",
            exportName: "trieApp",
            tsCompiler: "swc",

            swcOptions: {}
        })
    ]
});