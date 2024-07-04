/* /// <reference types="vitest" />

export default {
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts"
  }
 */

  import { defineConfig, mergeConfig } from 'vitest/config'
  import viteConfig from './vite.config.ts'
  
  export default mergeConfig(viteConfig, defineConfig({
    test: {
        environment: "jsdom",
        setupFiles: "./src/tests/setup.ts"
    }
  }))