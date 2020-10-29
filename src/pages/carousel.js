import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './commonStyles.module.css';

const features = [
  {
    title: <>Easy to Use</>,
    description: (
      <>
        It as good as using plain HTML tags. It has attributes to define its behaviour.
      </>
    ),
  },
  {
    title: <>Light Weight</>,
    description: (
      <>
        It is very light weight it adds just 1.2 kb of load on to your javascript bundle. Also it does not use any third party utility library like jquery or lodash
      </>
    ),
  },
  {
    title: <>Framework agnostic</>,
    description: (
      <>
        Since its a web component it does not depend on any javascript framework or library. It works as far as you want it to be statically rendered
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function () {
  const context = useDocusaurusContext();
  return (
    <Layout
      title="Carousel Component"
      description="A framework agnostic, Next Gen, light weight, touch friendly carousel compoent">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Carousel Web Component</h1>
          <p className="hero__subtitle">A tiny(1.2Kb), framework agnostic, light weight, zero dependancy, touch friendly carousel components</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/carousel/introduction')}>
              Go to Documentation
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
