// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference
import { defineConfig } from 'astro/config';

import remarkDirectiveVideo from './src/utils/remark/remarkDirectiveVideo.mjs';

export default defineConfig ({
  site: 'https://geksiong.github.io',
	integrations: [],
  markdown: {
    remarkPlugins: [
      // Add a Remark plugin that you want to enable for your project.
      // If you need to provide options for the plugin, you can use an array and put the options as the second item.
      // ['remark-autolink-headings', { behavior: 'prepend'}],
      'remark-math',
      '@akebifiky/remark-simple-plantuml',
      'remark-directive',
      remarkDirectiveVideo,
      'remark-gfm',
      'remark-smartypants',
    ],
    rehypePlugins: [
      // Add a Rehype plugin that you want to enable for your project.
      // If you need to provide options for the plugin, you can use an array and put the options as the second item.
      //['rehype-autolink-headings', { behavior: 'prepend'}],
      ['rehype-katex', {} ],
    ],
    syntaxHighlight: 'shiki',
    // If you are using shiki, here you can define a global theme and
    // add custom languages.
    shikiConfig: {
      theme: 'dracula-soft',
      langs: [ ],
      wrap: false,
    }
  },
	vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
