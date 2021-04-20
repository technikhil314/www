import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React, { useRef } from "react";
import { Box } from "../components/box";
import PageHead from "../components/head";
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
  "CSS&nbsp;lover",
  "devops&nbsp;enthusiast",
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
export default function Portfolio() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const animatingTitleRef = useRef();
  useAnimatingTitle(animatingTitleRef, keywords);
  return (
    <Layout>
      <PageHead title={siteConfig.tagline} />
      <header
        className={clsx(
          "hero hero--primary",
          "heroBanner",
          pageStyles.heroWrapper
        )}
      >
        <div className={clsx("container", pageStyles.heroContainer)}>
          <Box />
          <h1 className="hero__title">Hi! I am Nikhil</h1>
          <div className="hero__subtitle" aria-label={`I am a ${keywords[0]}`}>
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
          <p>
            I primarily work in web technologies and nodejs. <br /> I am fond of
            CSS, command line tools and web + media integration.
          </p>
          <div className="margin-vert--md">
            <button
              onClick={() =>
                (window.location.href =
                  "https://www.getrevue.co/profile/technikhil314")
              }
              className={`${pageStyles.subscribeButton} button button--primary button--lg item shadow--lw`}
            >
              Subscribe to my newsletter
            </button>
          </div>
        </div>
      </header>
    </Layout>
  );
}
