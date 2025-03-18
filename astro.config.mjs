// @ts-check
import { defineConfig, envField } from 'astro/config';
import nodeAdapter from '@astrojs/node';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: nodeAdapter({
    // stand alone is for node to run astro by itself in the server
    // middleware is to run astro along side another framework like expressJS
    mode: 'standalone'
  }),
  integrations: [tailwind()],
  // Aqui van las variables de entorno
  env:{
    schema:{
      SHOW_BUY_BUTTON: envField.boolean({ default: true, context: 'server', access: 'public' }),
      SCORE_API_ENDPOINT: envField.string({ context: 'server', access: 'public' }),
    }
  }
});