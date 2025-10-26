# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a Jekyll-based blog site called "The Deep Brief" (https://www.deepbrief.org) built using the Chirpy theme. The site focuses on leadership, technology, and AI topics with a tagline: "No Takes. No Fluff."

## Development Commands

### Build and Serve Locally
```bash
bundle install              # Install dependencies
bundle exec jekyll serve    # Run local development server (typically http://localhost:4000)
bundle exec jekyll build    # Build site to _site directory
```

### Testing
```bash
bundle exec htmlproofer _site --disable-external --ignore-urls "/^http:\/\/127.0.0.1/,/^http:\/\/0.0.0.0/,/^http:\/\/localhost/"
```

### Deployment
- Deployment is automated via GitHub Actions (`.github/workflows/pages-deploy.yml`)
- Pushes to `main` or `master` branch trigger automatic build and deploy to GitHub Pages
- The workflow runs tests with htmlproofer before deploying

## Architecture & Structure

### Content Organization
- **Blog Posts**: Located in `_posts/` with naming format `YYYY-MM-DD-title.md`
- **Static Pages**: Located in `_tabs/` (about, archives, categories, tags)
- **Configuration**: `_config.yml` contains site metadata, author info, analytics, and Jekyll settings
- **Assets**: Static files in `assets/` including images (`assets/img/`), JavaScript libraries, and stylesheets

### Post Front Matter Format
All posts use YAML front matter with the following structure:
```yaml
---
title: "Post Title"
date: YYYY-MM-DD HH:MM:SS -0400
categories: [posts]
tags: [tag1, tag2]
author: joe
description: "Post description for SEO"
toc: false  # or true for table of contents
---
```

### Custom Plugins
- `_plugins/posts-lastmod-hook.rb`: Automatically updates the `last_modified_at` field based on git commit history
  - Only triggers for posts with more than 1 commit
  - Uses `git log` to extract last modification date

### Theme Integration
- Uses `jekyll-theme-chirpy` gem (~> 7.3)
- Theme files are managed via RubyGems, not directly in the repository
- Custom overrides can be placed in `_data/`, `_layouts/`, `_includes/`, `_sass/`, or `assets/`
- Site avatar: `/assets/img/logo.png`

### Collections
- `tabs` collection defined in `_config.yml` for static pages
- Posts use default permalink structure: `/posts/:title/`

### Key Configuration Details
- Site URL: https://www.deepbrief.org
- Pagination: 10 posts per page
- PWA enabled with offline cache
- GitHub username: sambj24
- Author: Joe Sambuco (sambucoj@gmail.com)

## Content Guidelines

### Writing Style
- Focus on technical accuracy and practical information
- Avoid fluff and unnecessary superlatives
- Include real-world examples and case studies when relevant
- Use data and statistics to support claims

### Post Topics
Primary focus areas:
- AI implementation and practical applications
- Cloud technology and infrastructure
- Leadership and technology management
- Security and cybersecurity
- Emerging technologies (IoT, drones, digital twins)

## Working with Posts

### Creating a New Post
1. Create file in `_posts/` with format: `YYYY-MM-DD-post-slug.md`
2. Add required front matter (title, date, categories, tags, author, description)
3. Write content using markdown
4. Commit changes - the plugin will track modification dates via git

### Modifying Existing Posts
- The `posts-lastmod-hook.rb` plugin automatically updates `last_modified_at` based on git history
- No manual date updates needed

## Dependencies

### Ruby Gems
- `jekyll-theme-chirpy` (~> 7.3)
- `html-proofer` (~> 5.0) for testing
- Platform-specific: `tzinfo`, `tzinfo-data`, `wdm` (Windows)

### JavaScript Libraries (in assets/lib/)
- Day.js for date formatting
- Clipboard.js for copy functionality
- GLightbox for image galleries
- MathJax for mathematical expressions
- Mermaid for diagrams
- Simple Jekyll Search
- Tocbot for table of contents

## Testing & Quality

The CI/CD pipeline includes:
1. Ruby 3.3 setup with bundler caching
2. Jekyll build with production environment
3. HTMLProofer validation (internal links only)
4. Automated deployment to GitHub Pages

## Custom Enhancements

### Deep Sea Professional Theme
The site features a custom "Deep Brief" theme with ocean aesthetics and professional polish:

**Custom Styling** (`_sass/custom.scss`):
- Deep ocean color palette (navy blues, teals, seafoam)
- Professional typography with Inter (sans-serif) and Lora (serif for content)
- Enhanced spacing, shadows, and card designs
- Dark mode support throughout
- Responsive design for mobile

**Animations** (`_sass/animations.scss`):
- Reading progress bar at top of posts
- Floating bubble animations in sidebar
- Scroll-triggered fade-in animations
- Ocean wave dividers
- Bioluminescent glow effects on hover
- Depth-based shadows for underwater feel
- Smooth transitions with cubic-bezier easing

**Interactive Features** (`assets/js/deep-brief.js`):
- Reading progress tracking
- Floating bubbles in sidebar
- Scroll-based content animations
- Dynamic wave dividers replacing HR tags
- Enhanced button ripple effects
- Featured post highlighting
- Smooth scroll to top

**Custom Pages**:
- `404.html` - Ocean-themed error page with animated fish and bubbles

### Loading Custom Assets
- Custom JavaScript: `_includes/custom-scripts.html`
- Main stylesheet: `assets/css/style.scss` imports all custom SCSS

## Important Notes

- Do not modify files excluded in `_config.yml` (docs, tools, README.md, LICENSE, config files)
- The site uses Kramdown for markdown processing with Rouge syntax highlighting
- Comment system is available but not currently configured (supports Disqus, Utterances, or Giscus)
- Analytics integrations available but not configured (Google, GoatCounter, Umami, Matomo, Cloudflare, Fathom)
- Custom theme respects `prefers-reduced-motion` for accessibility
