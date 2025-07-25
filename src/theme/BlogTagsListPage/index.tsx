import React, { JSX } from 'react';
import BlogLayout from '@theme/BlogLayout';
import Link from '@docusaurus/Link';
import { ThemeClassNames } from '@docusaurus/theme-common';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

interface BlogPostMetadata {
  permalink: string;
  title: string;
  description?: string;
  date?: string;
  formattedDate?: string;
  tags?: Array<{ label: string; permalink: string }>;
  authors?: Array<{ name: string; title?: string; url?: string; image_url?: string }>;
}

interface BlogTagsListPageProps {
  items: Array<{
    content: {
      metadata: BlogPostMetadata;
      (): JSX.Element;
    };
  }>;
  metadata: {
    allTagsPath: string;
    name: string;
    count: number;
  };
}

function formatDate(dateString?: string) {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogTagsListPage({ items, metadata }: BlogTagsListPageProps) {
  const { allTagsPath, name: tagName, count } = metadata;
  
  return (
    <BlogLayout
      title={`Posts tagged with "${tagName}"`}
      description={`Blog posts tagged with "${tagName}"`}
      wrapperClassName={ThemeClassNames.wrapper.blogPages}
    >
      <div className={styles.header}>
        <h1>
          {count} {count === 1 ? 'post' : 'posts'} tagged with "{tagName}"
        </h1>
        <p>Browse all blog posts that are tagged with "{tagName}"</p>
        <Link href={allTagsPath} className={styles.viewAllTags}>
          <Translate id="theme.tags.allTagsLink">
            View All Tags
          </Translate>
          <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M7.5 21L6 19.5L15.375 10.125C16.125 9.375 16.125 8.125 15.375 7.3125L13.5 5.4375V12.75H12V3H13.5V5.4375L15.375 3.5625C16.5 2.4375 18.375 2.4375 19.5 3.5625L20.4375 4.5C21.5625 5.625 21.5625 7.5 20.4375 8.625L11.0625 18C10.6875 18.375 10.125 18.75 9.5625 18.75H9L7.5 21Z"
            />
          </svg>
        </Link>
      </div>

      <div className={styles.tagsList}>
        {items.map(({ content: BlogPostContent }) => {
          const { metadata } = BlogPostContent;
          const formattedDate = formatDate(metadata.date);
          
          return (
            <article key={metadata.permalink} className={styles.postItem}>
              <Link to={metadata.permalink} className={styles.postTitle}>
                {metadata.title}
              </Link>
              
              {(metadata.date || metadata.authors?.length) && (
                <div className={styles.postMeta}>
                  {formattedDate && <span>{formattedDate}</span>}
                  {metadata.authors?.map((author, idx) => (
                    <span key={idx}>
                      {author.url ? (
                        <a href={author.url} target="_blank" rel="noopener noreferrer">
                          {author.name}
                        </a>
                      ) : (
                        author.name
                      )}
                    </span>
                  ))}
                </div>
              )}
              
              {metadata.description && (
                <p className={styles.postDescription}>{metadata.description}</p>
              )}
              
              {metadata.tags?.length > 0 && (
                <div className={styles.postTags}>
                  {metadata.tags.map((tag) => (
                    <Link
                      key={tag.permalink}
                      to={tag.permalink}
                      className={styles.tagPill}
                    >
                      {tag.label}
                    </Link>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </BlogLayout>
  );
}
