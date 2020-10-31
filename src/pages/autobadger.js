import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './commonStyles.module.css';
import Features from '../components/feature';

const features = [
  {
    title: <>Easy to Use</>,
    description: (
      <>
        It is just like another command line tool. All traditional things work with it. Use the old conventional <code>--help</code> option with it to see help
      </>
    ),
  },
  {
    title: <>Don't do robotic work</>,
    description: (
      <>
        Adding usual badges (liscense, version, build status etc) to your mark down is a robotic job don't waste time in it.
      </>
    ),
  },
  {
    title: <>Same badges in just one command</>,
    description: (
      <>
        All you need to do is <code>cd</code> into directory that has your README.md file and run <code><nobr>auto-badger</nobr></code> command. And done. Commit and push the markdown.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function () {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="Git auto badger"
      description="A node cli tool to add badges to your markdown in 2 seconds">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Git auto badger</h1>
          <p className="hero__subtitle">A node cli tool to add badges to your markdown in 2 seconds</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/autobadger/introduction')}>
              Go to Documentation
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <Features features={features} />
        )}
      </main>
    </Layout>
  );
}