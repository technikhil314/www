import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useColorMode } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import ExternalLink from "../components/externalLink";
import PageHead from "../components/head";
import pageStyles from "./about.module.css";

const exampleTheme = {
  background: "transparent",
  text: "#000",
  grade4: "hsl(78, 68%, 34%)",
  grade3: "hsl(78, 68%, 48%)",
  grade2: "hsl(78, 68%, 62%)",
  grade1: "hsl(78, 68%, 78%)",
  grade0: "#eee",
};

const GithubContributionsHeatMap = () => {
  const isDarkTheme = useColorMode().colorMode === "dark";
  exampleTheme.grade0 = isDarkTheme ? "#333" : "#eee";
  return (
    <GitHubCalendar
      username="technikhil314"
      theme={exampleTheme}
      blockSize={15}
      blockMargin={2}
    >
      <ReactTooltip delayShow={50} html />
    </GitHubCalendar>
  );
};
export default function About() {
  return (
    <Layout>
      <PageHead title={`About Nikhil Mehta`} description={"About the author"} />
      <section className={`container ${pageStyles.about}`}>
        <h1 className="text--center">Hi! I am Nikhil</h1>
        <div className="mx-auto text--center">
          <h5 className="text--center margin-bottom--none">
            My github contributions
          </h5>
          <GithubContributionsHeatMap />
        </div>
        <p className="text--center">
          When some one wants to know me. They mostly ask following set of
          questions.
        </p>
        <article className="padding-bottom--md">
          <header>
            <h3 className="text--primary">What do you do for living?</h3>
          </header>
          <p>
            I am a software engineer by profession and I work on web
            technologies and nodejs primarily. Currently I work with{" "}
            <ExternalLink href="https://paypal.com/">Paypal</ExternalLink> from
            <ExternalLink href="https://en.wikipedia.org/wiki/Pune">
              Pune India
            </ExternalLink>
            . I started my career as a full stack developer in 2014 soon to
            realise that I have more interest in UI, CSS, and cryptography. In
            my free time I manage my own open source projects and I play around
            with css,animations and try out different tools. Currently I am
            learning{" "}
            <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API">
              WebGL
            </ExternalLink>{" "}
            using{" "}
            <ExternalLink href="https://threejs.org/">threejs</ExternalLink> &{" "}
            <ExternalLink href="https://github.com/pmndrs/react-three-fiber">
              react-three-fiber
            </ExternalLink>
            . See the <Link to={useBaseUrl("/")}>Home page</Link> to find out
            how much progress I have made. And also I am creating something
            amazing using webRTC. So keep an eye on this site. I will announce
            it some time soon.
          </p>
        </article>
        <article className="padding-bottom--md">
          <header>
            <h3 className="text--primary">
              What is your educational background?
            </h3>
          </header>
          <p>
            I dont have a formal computer science degree. I did my bachelor and
            masters degree in Mathematics and applied Mathematics from{" "}
            <ExternalLink href="http://www.unipune.ac.in/">
              University of Pune
            </ExternalLink>
            , India
          </p>
        </article>
        <article className="padding-bottom--md">
          <header>
            <h3 className="text--primary">
              What do you do apart from profession?
            </h3>
          </header>
          <p>
            I have huge interest in learning to play drums which I am learning
            on my own. I have few of my songs/videos on{" "}
            <ExternalLink href="https://www.youtube.com/user/nikhil7868">
              youtube channel
            </ExternalLink>
            . I also like going on bike trips. I am a poet too. I mostly write
            hindi poems.
          </p>
        </article>
        <article className="padding-bottom--md">
          <header>
            <h3 className="text--primary">
              What keeps you motivated to learn new things?
            </h3>
          </header>
          <p>
            I follow a lot people on{" "}
            <ExternalLink href="https://twitter.com/technikhil314">
              Twitter
            </ExternalLink>{" "}
            &{" "}
            <ExternalLink href="https://github.com/technikhil314">
              Github
            </ExternalLink>
            . It helps me keep updated and makes me realise that I have a long
            way to go. So I can’t stop no matter what. But all I can do is learn
            and apply it over course of time.
          </p>
        </article>
        <article className="padding-bottom--md">
          <header>
            <h3 className="text--primary">
              What is the tech stack you have used to create this site?
            </h3>
          </header>
          <p>
            This is a statically generated site built using{" "}
            <ExternalLink href="https://v2.docusaurus.io/">
              docusaurus
            </ExternalLink>
            . and is deployed to{" "}
            <ExternalLink href="https://www.netlify.com/">netlify</ExternalLink>
            .
          </p>
          <p>The tech stack is</p>
          <ul>
            <li>react - The view library</li>
            <li>mdx - markdown renderer extend to use jsx</li>
            <li>infima - The css framework</li>
            <li>threejs - 3d webgl library</li>
            <li>react-three-fiber - Wrapper around threejs for react</li>
          </ul>
        </article>
        <article className="padding-bottom--md">
          <header>
            <h3 className="text--primary">How can I contact you?</h3>
          </header>
          <p>
            Simply fill in <Link to={useBaseUrl("contactme")}>this form</Link>.
            And it will send me an email with all your details. then we can take
            it forward over email. <br /> If you are a recuiter you can find my
            resume
            <Link to={useBaseUrl("resume")}>here</Link> which has my contact
            details as well.
          </p>
        </article>
        <article className="padding-bottom--md">
          <header>
            <h3 className="text--primary">
              What all softwares/hardwares do you use?
            </h3>
          </header>
          <p>
            You can find most of the things are use on{" "}
            <Link to={useBaseUrl("uses")}>this page</Link>.
          </p>
        </article>
      </section>
    </Layout>
  );
}
