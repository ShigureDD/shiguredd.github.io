# Blog Post Template Guide

This guide explains how to use the professional blog post template for your Docusaurus blog.

<!--truncate-->

## Table of Contents

- [Front Matter](#front-matter)
- [Structure](#structure)
- [Components](#components)
- [Best Practices](#best-practices)
- [Publishing Workflow](#publishing-workflow)

## Front Matter

The front matter is the YAML section at the top of each post. Here's what each field means:

```yaml
---
# Required fields
title: "Your Post Title"  # Keep it clear and SEO-friendly (60 chars max)
description: "A concise summary of your post (150-160 chars for SEO)"  
date: YYYY-MM-DD  # Format: YYYY-MM-DD
author: "Tom Lam"  # Your name as it should appear

# SEO & Discoverability
tags:
  - primary-tag  # 1-3 main tags (e.g., 'javascript', 'react', 'webdev')
  - secondary-tag  # More specific tags (e.g., 'performance', 'tutorial')
  - technology  # Related technologies mentioned

# Optional but recommended
image: /img/blog/your-image.jpg  # 1200x630px for social sharing
image_alt: "Description of the image for accessibility"
slug: custom-url-slug  # Will be auto-generated from title if not provided

# Advanced options
hide_table_of_contents: false  # Set to true to hide TOC
draft: false  # Set to true while working on the post
---
```

## Structure

1. **Introduction**
   - Start with a compelling hook
   - Explain what problem the post solves
   - Include a key takeaway

2. **Prerequisites**
   - List required knowledge
   - Mention necessary tools/software

3. **Main Content**
   - Break into logical sections with clear headings
   - Use subheadings (###) for better organization
   - Include code examples where relevant

4. **Examples & Use Cases**
   - Show practical applications
   - Use tables for comparison when helpful

5. **Best Practices**
   - Share tips and recommendations
   - Warn about common pitfalls

6. **Conclusion**
   - Summarize key points
   - Include next steps or call-to-action

7. **Further Reading**
   - Link to related content
   - Include documentation references

## Components

### Code Blocks

Use fenced code blocks with language specification:

````markdown
```jsx
function Example() {
  return <div>Code example</div>;
}
```
````

### Callouts

Use Docusaurus admonitions for callouts:

```markdown
:::tip Pro Tip
This is a helpful tip.
:::

:::warning Warning
This is an important warning.
:::
```

### Tables

Use markdown tables for structured data:

```markdown
| Feature | Description | Example |
|---------|-------------|---------|
| Feature 1 | Description | `code` |
| Feature 2 | Description | `code` |
```

## Best Practices

### Writing Style

- Use active voice
- Keep paragraphs short (2-3 sentences)
- Use bullet points for lists
- Include code examples for clarity

### SEO Optimization

- Include target keywords in title and first paragraph
- Use descriptive alt text for images
- Link to related posts
- Use descriptive URLs

### Code Examples

- Keep examples focused and minimal
- Include comments for clarity
- Show both simple and advanced use cases
- Test all code before publishing

## Publishing Workflow

1. Create a new post using the template:

   ```bash
   cp _template.md YYYY-MM-DD-post-title.md
   ```

2. Set `draft: true` while writing
3. Preview locally with `npm run start`
4. Get feedback from peers
5. Set `draft: false` when ready to publish
6. Commit and push changes
7. Create a pull request for review

## Image Guidelines

- Use WebP format for better compression
- Optimal size: 1200x630px for featured images
- Compress images before committing
- Add descriptive alt text for accessibility

## Updating the Template

To update all posts with template changes:

1. Make changes to `_template.md`
2. Use a tool like `sed` or a find/replace in your editor
3. Test changes locally before committing

## Troubleshooting

- **Broken links**: Use `npm run broken-links` to check
- **Markdown linting**: Run `npm run lint:md`
- **Build errors**: Check the console output for specific issues

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

All content is licensed under [MIT License](LICENSE).
