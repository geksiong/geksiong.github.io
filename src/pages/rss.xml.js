import rss from '@astrojs/rss';

import siteData from '../data/site.json';

const postImportResult = import.meta.glob('./posts/**/*.md', { eager: true });
const posts = Object.values(postImportResult);

export const get = () => rss({
    title: siteData.title,
    description: siteData.description,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: post.url,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.pubDate,
    }))
  });
