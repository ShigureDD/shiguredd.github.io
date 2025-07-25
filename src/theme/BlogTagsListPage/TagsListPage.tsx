import React from 'react';
import TagsListByLetter from '../TagsListByLetter';
import styles from './styles.module.css';

interface TagType {
  name: string;
  permalink: string;
  count: number;
}

interface BlogTagsListPageProps {
  tags: TagType[];
  sidebar: any;
}

export default function BlogTagsListPage({
  tags,
  sidebar,
}: BlogTagsListPageProps): React.ReactElement {
  return (
    <div className={styles.tagsListPage}>
      <header className={styles.hero}>
        <div className="container">
          <h1>Tags</h1>
          <p>Browse posts by tags</p>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <TagsListByLetter tags={tags} />
          </div>
        </div>
      </main>
    </div>
  );
}
