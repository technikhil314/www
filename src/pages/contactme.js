import Layout from '@theme/Layout';
import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import basicStyles from './styles.module.css';
import animatingTitleStyles from './animatingTitle.module.css';
import { useAnimatingTitle } from '../hooks/animatingTitle';

const keywords = [
  "Technical&nbsp;Consultancy",
  "Freelance work",
  "Web&nbsp;Development",
  "Nodejs&nbsp;Development",
  "Project&nbsp;Evaluation",
  "Technical&nbsp;roadmaps",
  "Project&nbsp;Assesment",
  "Contributions",
  "Any&nbsp;help"
];

export default function () {
  const animatingTitleRef = useRef();
  useAnimatingTitle(animatingTitleRef, keywords);
  return (
    <Layout
      title={`Contact me`}
      description={"technikhil314 contact information"}>
      <header className={clsx('hero hero--primary', basicStyles.heroBanner)}>
        <div className="container">
          <h2 className={animatingTitleStyles.animatingTitleWrapper}>
            Get in touch with me for {" "}
            <span className={animatingTitleStyles.animatingTitle} ref={animatingTitleRef} dangerouslySetInnerHTML={{ __html: keywords[0] }}>
            </span>
          </h2>
        </div>
      </header>
      <main>

      </main>
    </Layout>
  );
}
