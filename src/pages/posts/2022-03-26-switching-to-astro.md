---
title: Switching to Astro
date: 2022-03-26
tags:
  - static site generators
  - astro
---

Decided to make the switch to Astro (currently at 0.24.3). Unlike VuePress, Astro doesn't come with batteries so I'm basically starting from scratch. I think I've reached a point where I think I can replace the current website.

## Differences

Just to highlight some of the main differences:

- Astro uses "remark" for the markdown engine, while VuePress is based on "markdown-it".
- Astro is a static site generator generating multiple standalone pages, while VuePress builds a Single Page App.
- You must add the "layout" field to the markdown frontmatter. There had been some discussions over at Astro's Github repo about creating a way to avoid doing this (since people want to convert their existing sites and this is quite a bit of hassle). I hope they agree on a solution soon. For now, [aliases](https://docs.astro.build/en/guides/aliases/) help to alleviate this pain a bit.
- Astro doesn't come with any search feature.
- Still no Prettier for .astro files.
