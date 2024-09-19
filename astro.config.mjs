// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    base: 'javihll.github.io/my-portfolio',
    integrations: [react()]
});
