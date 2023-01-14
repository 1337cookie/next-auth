import { sveltekit } from "@sveltejs/kit/vite"

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  server: {
    proxy: {
      "xfwd": "true",
      "toProxy": "true"
      
    },
    port: 3000,
    // https: true,
    host: "0.0.0.0",
    cors: true,
    origin: "https://api.buddy.nz",
    

  }
}

export default config
