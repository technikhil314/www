import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React, { useRef } from 'react';
import animatingTitleStyles from './animatingTitle.module.css';
import basicStyles from './styles.module.css';
import { useAnimatingTitle } from '../hooks/animatingTitle';

const keywords = [
  "Software&nbsp;engineer",
  "Web&nbsp;developer",
  "Javascript&nbsp;developer",
  "Nodejs&nbsp;developer",
  "Freelancer",
  "Performance&nbsp;engineer",
  "Open&nbsp;source&nbsp;contributor",
  "CSS&nbsp;enthusiast",
  "Devops&nbsp;person",
  "Blockchain&nbsp;learner",
  "Command&nbsp;Line&nbsp;Lover",
  "Lefty",
  "Drummer",
  "Mathematician",
  "Worst&nbsp;singer",
  "Free&nbsp;education&nbsp;believer",
  "All&nbsp;time&nbsp;learner",
];

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: <>Powered by React</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', basicStyles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={basicStyles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function () {
  const context = useDocusaurusContext();
  const animatingTitleRef = useRef();
  useAnimatingTitle(animatingTitleRef, keywords);
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Home`}
      description={siteConfig.tagline}>
      <header className={clsx('hero hero--primary', basicStyles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Hi! I am NIkhil Mehta</h1>
          <div className="hero__subtitle">
            <p className={animatingTitleStyles.animatingTitleWrapper}>
              I am a {" "}
              <span className={animatingTitleStyles.animatingTitle} ref={animatingTitleRef} dangerouslySetInnerHTML={{ __html: keywords[0] }}></span></p>
          </div>
          <div className={basicStyles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                basicStyles.getStarted,
              )}
              to={useBaseUrl('contactme/')}>
              Contact Me
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={basicStyles.features}>
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
