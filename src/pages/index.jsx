import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React, { useRef } from "react";
import { Box } from "../components/box";
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
export default function Portfolio() {
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
        </div>
      </header>
    </Layout>
  );
}
