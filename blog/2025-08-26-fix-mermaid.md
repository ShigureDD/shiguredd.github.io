---
title: "Fix mermaid in docusaurus"
slug: fix-mermaid-in-docusaurus
authors:
  - name: Tom Lam
    title: Software Developer
    url: https://github.com/ShigureDD
    image_url: https://github.com/ShigureDD.png
tags:
  - mermaid
  - docusaurus
  - blog
date: 2025-08-26 GMT+8
description: "Fix mermaid in docusaurus"
---

## How to fix

In .yarnrc.yml file change **nodeLinker** from **pnpm** to **node-modules**

```yml
nodeLinker: node-modules

pnpMode: strict

yarnPath: .yarn/releases/yarn-4.9.2.cjs
```

Reference:

[Mermaid plugin breaks the document project when Yarn v4 is used and PnP is enabled](https://github.com/facebook/docusaurus/issues/10645)
