import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React, { useRef } from "react";
import { Box } from "../components/box";
import Features from "../components/feature";
import animatingTitleStyles from "../css/animatingTitle.module.css";
import { useAnimatingTitle } from "../hooks/animatingTitle";
import pageStyles from "./index.module.css";

const keywords = [
  "software&nbsp;engineer",
  "web&nbsp;developer",
  "javascript&nbsp;developer",
  "nodejs&nbsp;developer",
  "freelancer",
  "performance&nbsp;engineer",
  "open&nbsp;source&nbsp;contributor",
  "CSS&nbsp;enthusiast",
  "devops&nbsp;person",
  "blockchain&nbsp;learner",
  "linux&nbsp;fan",
  "command&nbsp;line&nbsp;lover",
  "lefty",
  "drummer",
  "helper",
  "mathematics&nbsp;student",
  "worst&nbsp;singer",
  "free&nbsp;education&nbsp;believer",
  "all&nbsp;time&nbsp;learner",
];

const features = [
  {
    title: <>A keen learner</>,
    description: (
      <>
        I am a programmer and software engineer at heart. Always trying to keep
        my knowledege up to date. I love solving complex mathematical problems
        using technology. I suffer from multiple passion disorder. But I settle
        to call my self a web developer.
      </>
    ),
  },
  {
    title: <>A strong believer</>,
    description: (
      <>
        The reason I choose call myself a web developer despite of the fact that
        I hugely like the capabilities C brings to a programmers life is the
        open nature of web. And I believe that this open nature will make web
        technologies a great place to work, explore & make impact on peoples
        lives.
      </>
    ),
  },
  {
    title: <>Always ready to help</>,
    description: (
      <>
        I like to keep myself always open for help/collaborate that makes me
        learn and share my knowledege. And I am never afraid of trying out or
        creating new things even if it will not give desired output in first go.
        But it will evolve.
      </>
    ),
  },
];

export default function Home() {
  const context = useDocusaurusContext();
  const animatingTitleRef = useRef();
  useAnimatingTitle(animatingTitleRef, keywords);
  const { siteConfig = {} } = context;
  return (
    <Layout title={`Home`} description={siteConfig.tagline}>
      <header
        className={clsx(
          "hero hero--primary",
          "heroBanner",
          pageStyles.heroWrapper
        )}
      >
        <div className={clsx("container", pageStyles.heroContainer)}>
          <div>
            <Box />
            <h1 className="hero__title">Hi! I am Nikhil Mehta</h1>
            <div
              className="hero__subtitle"
              aria-label={`I am a ${keywords[0]}`}
            >
              <p
                className={animatingTitleStyles.animatingTitleWrapper}
                aria-hidden="true"
              >
                I am a{" "}
                <span
                  className={animatingTitleStyles.animatingTitle}
                  ref={animatingTitleRef}
                  dangerouslySetInnerHTML={{ __html: keywords[0] }}
                ></span>
              </p>
            </div>
            <div className={"buttons"}>
              <Link
                className={clsx(
                  "button button--outline button--secondary button--lg"
                )}
                to={useBaseUrl("contactme/")}
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && <Features features={features} />}
      </main>
    </Layout>
  );
}
