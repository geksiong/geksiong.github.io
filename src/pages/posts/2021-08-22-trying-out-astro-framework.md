---
title: Trying Out Astro Framework
date: 2021-08-22
tags:
  - static site generators
  - astro
---
I came across a few articles discussing a new static site generator called [Astro](https://astro.build), that allows you to mix various UI component frameworks such as React and Vue. Intrigued by the concept, and thinking it would be perfect for a 'code labs' kind of website, I decided to give it a try.

Initial impression was good. I tried a simple website that someone wrote not too long ago, which demonstrated React and Vue counters on the same page. Following some articles, I attempted to develop a real blog site with it.

## Thoughts

- It is similar to Eleventy in that you need to set up a lot of things yourself. I'm still trying to figure out how to implement typical blog features such as previous/next pages, pagination of posts, etc. Like Eleventy, Astro doesn't give you things like SPA, PWA, etc, unlike for example, Gatsby or Hugo.

### The framework is still evolving

- The APIs are definitely still evolving. I tried a code sample that set up a basic blog, only to discover that it was based on the collections API in 0.18, but it was removed in 0.19. It took me quite some time to figure out the new way of doing things.

### Features

- One key feature is partial hydration which is an interesting idea, although I haven't tried it yet.
- Some things are broken? Code syntax highlighting (via PrismJS) didn't work, when it should out of the box.
- It features "file-based routing", but I don't think this meets certain common use cases. For example, I may want to have alternative URLs, or to exclude some pages from being picked up and included in the build. There are discussions on their GitHub about whether/how to support alternative urls.
- I need to specify a layout in the frontmatter for every single markdown file, and it uses relative paths. This makes the markdown files less portable.
- Documentation is not that great right now. Not enough tutorials and examples on common needs.

### Editor Support

- VScode support is still rudimentary, basically just syntax highlighting of .astro files. Astro files are similar to Vue SFCs where Javascript codes and templates are located in the same file.
- My usual code linting/formatting plugins don't work since they don't recognise .astro files. I've grown quite accustomed to not having to insert semicolons and commas by hand now 😅.
- It uses Typescript which is nice, but there is no IDE support yet for .astro files.
- The Tailwind plugin for VScode still works in .astro files.

## Summary

I think Astro is a promising concept and this might be the beginning of a new trend. You do not need to restrict yourself to just React, or just Vue components, anymore. For more complex apps though, it still makes sense to stick to one frontend framework, due to the needs of state management, but perhaps this approach can make sense for "micro-frontends"?

I'll probably track it for a while longer before I decide whether to switch to Astro as a website / blog engine.
