import React, { JSX } from 'react';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
type Tag = {
  label: string;
  permalink: string;
  count: number;
};
// Local implementation to group tags by their first letter
function listTagsByLetters(tags: Tag[]): Record<string, Tag[]> {
  return tags.reduce((acc, tag) => {
    const letter = tag.label[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(tag);
    return acc;
  }, {} as Record<string, Tag[]>);
}
import Heading from '@theme/Heading';
import styles from './styles.module.css';

function TagLetterEntryItem({letterEntry}: {letterEntry: [string, Tag[]]}) {
  const [letter, tags] = letterEntry;
  return (
    <article>
      <Heading as="h2" className={styles.letter} id={letter}>
        {letter}
      </Heading>
      <ul className="padding--none">
        {tags.map((tag) => (
          <li key={tag.permalink} className={styles.tag}>
            <Link href={tag.permalink} className={styles.tagLink}>
              {tag.label}
              <span className={styles.tagCount}>({tag.count})</span>
            </Link>
          </li>
        ))}
      </ul>
      <hr className={styles.divider} />
    </article>
  );
}

export default function TagsListByLetter({tags}: {tags: Tag[]}): JSX.Element {
  const title = translate({
    message: 'Tags',
    description: 'The title of the tag list page',
  });

  return (
    <div className="container margin-vert--lg">
      <div className="row">
        <main className="col col--8 col--offset-2">
          <Heading as="h1" className={styles.title}>
            {title}
          </Heading>
          <div className={styles.tagsList}>
            {Object.entries(listTagsByLetters(tags)).map(([letter, letterTags]) => (
              <TagLetterEntryItem key={letter} letterEntry={[letter, letterTags]} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
