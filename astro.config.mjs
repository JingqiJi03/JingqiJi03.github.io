// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://jingqiji03.github.io',
  integrations: [
    icon({
      include: {
        "fa6-brands": ["*"],
        "fa6-solid": ["*"],
        "simple-icons": ["*"],
        "vscode-icons": ["*"]
      }
    })
  ]
});