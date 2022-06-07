// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  site: 'https://geksiong.github.io',
	integrations: [],
  markdown: {
    render: [
      '@astrojs/markdown-remark',
      {
        remarkPlugins: [
          // Add a Remark plugin that you want to enable for your project.
          // If you need to provide options for the plugin, you can use an array and put the options as the second item.
          // ['remark-autolink-headings', { behavior: 'prepend'}],
          [
            'remark-math',
            'remark-gfm',
            'remark-smartypants',
          ],
        ],
        rehypePlugins: [
          // Add a Rehype plugin that you want to enable for your project.
          // If you need to provide options for the plugin, you can use an array and put the options as the second item.
          'rehype-slug',
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
        },
      },
    ],
  },
	vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
