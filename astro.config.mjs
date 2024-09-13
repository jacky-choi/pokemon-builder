// import { defineConfig } from 'astro/config';

// // https://astro.build/config
// export default defineConfig({});


import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  output: "server",
  adapter: netlify(),
});