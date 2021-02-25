import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React, { useRef, useState, useMemo } from 'react';
import { Canvas } from 'react-three-fiber';
import { TextureLoader } from "three";
import cssImg from "../../static/img/css.png";
import htmlImg from "../../static/img/html.png";
import jsImg from "../../static/img/js.png";
import nodejsImg from "../../static/img/nodejs.png";
import reactImg from "../../static/img/react.jpg";
import webpackImg from "../../static/img/webpack.png";
import avatarImg from "../../static/img/avatar-sketch.png";
import { Box } from '../components/box';
import Features from '../components/feature';
import animatingTitleStyles from '../css/animatingTitle.module.css';
import { useAnimatingTitle } from '../hooks/animatingTitle';
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
        I am a programmer and software engineer at heart. Always trying to keep my knowledege up to date. I love solving complex mathematical problems using technology.
        I suffer from multiple passion disorder. But I settle to call my self a web developer.
      </>
    ),
  },
  {
    title: <>A strong believer</>,
    description: (
      <>
        The reason I choose call myself a web developer despite of the fact that I hugely like the capabilities C brings to a programmers life is the open nature of web.
        And I believe that this open nature will make web technologies a great place to work, explore & make impact on peoples lives.
      </>
    ),
  },
  {
    title: <>Always ready to help</>,
    description: (
      <>
        I like to keep myself always open for help/collaborate that makes me learn and share my knowledege. And I am never afraid of trying out or creating new things even if it will not give desired output in first go. But it will evolve.
      </>
    ),
  },
];

export default function () {
  const context = useDocusaurusContext();
  const [hover, setHover] = useState(false);
  const animatingTitleRef = useRef();
  useAnimatingTitle(animatingTitleRef, keywords);
  const { siteConfig = {} } = context;
  const htmlTexture = useMemo(() => new TextureLoader().load(htmlImg), []);
  const jsTexture = useMemo(() => new TextureLoader().load(jsImg), []);
  const cssTexture = useMemo(() => new TextureLoader().load(cssImg), []);
  const reactTexture = useMemo(() => new TextureLoader().load(reactImg), []);
  const webpackTexture = useMemo(() => new TextureLoader().load(webpackImg), []);
  const nodejsTexture = useMemo(() => new TextureLoader().load(nodejsImg), []);
  return (
    <Layout
      title={`Home`}
      description={siteConfig.tagline}>
      <header className={clsx('hero hero--primary', "heroBanner", pageStyles.heroWrapper)}>
        <div className={clsx('container', pageStyles.heroContainer)}>
          <div>
            <div onPointerOver={(event) => setHover(true)}
              onPointerOut={(event) => setHover(false)}>
              {
                !hover ? (
                  <Canvas style={{ height: 200 }}>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <Box position={[0, 0, 0]}>
                      <meshBasicMaterial attachArray="material" opacity={1}>
                        <primitive attach="map" object={htmlTexture} />
                      </meshBasicMaterial>
                      <meshBasicMaterial attachArray="material" opacity={1}>
                        <primitive attach="map" object={reactTexture} />
                      </meshBasicMaterial>
                      <meshBasicMaterial attachArray="material" opacity={1}>
                        <primitive attach="map" object={jsTexture} />
                      </meshBasicMaterial>
                      <meshBasicMaterial attachArray="material" opacity={1}>
                        <primitive attach="map" object={webpackTexture} />
                      </meshBasicMaterial>
                      <meshBasicMaterial attachArray="material" opacity={1}>
                        <primitive attach="map" object={cssTexture} />
                      </meshBasicMaterial>
                      <meshBasicMaterial attachArray="material" opacity={1}>
                        <primitive attach="map" object={nodejsTexture} />
                      </meshBasicMaterial>
                    </Box>
                  </Canvas>
                ) : (<img src={avatarImg} height={193}></img>)
              }
            </div>
            <h1 className="hero__title">Hi! I am Nikhil Mehta</h1>
            <small className={clsx(pageStyles.note)}>My expertise in each of the tool is directly proportional to distance & size of it from my avatar</small>
            <div className="hero__subtitle" aria-label={`I am a ${keywords[0]}`}>
              <p className={animatingTitleStyles.animatingTitleWrapper} aria-hidden="true">
                I am a {" "}
                <span className={animatingTitleStyles.animatingTitle} ref={animatingTitleRef} dangerouslySetInnerHTML={{ __html: keywords[0] }}></span>
              </p>
            </div>
            <div className={"buttons"}>
              <Link
                className={clsx(
                  'button button--outline button--secondary button--lg'
                )}
                to={useBaseUrl('contactme/')}>
                Contact Me
            </Link>
            </div>
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
