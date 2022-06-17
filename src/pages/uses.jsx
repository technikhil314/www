import Layout from "@theme/Layout";
import clsx from "clsx";
import PageHead from "../components/head";
import styles from "./commonStyles.module.css";
import React from "react";
import usesStyles from "./uses.module.css";

const developerTools = [
  {
    name: "iterm",
    for: "Terminal application",
    link: "https://iterm2.com/",
  },
  {
    name: "scrcpy",
    for: "First class tool to remote andorid device over adb",
    link: "https://github.com/Genymobile/scrcpy",
  },
  {
    name: "zsh",
    for: "the shell",
    link: "https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH",
  },
  {
    name: "nush",
    for: "another shell (trying out)",
    link: "https://github.com/nushell/nushell",
  },
];
const commandLineTools = [
  {
    name: "imagemagick",
    for: "Provides the <code>convert</code>/<code>magick</code> command for converting images from one format to another",
    link: "https://imagemagick.org/script/convert.php",
  },
  {
    name: "tig",
    for: "A terminal based ASCII first UI interface for git",
    link: "https://github.com/jonas/tig",
  },
  {
    name: "asdf-vm",
    for: "A pluggable and awesome all in one version manager for nodejs, java, golang and many more",
    link: "https://asdf-vm.com/",
  },
];
const productivityTools = [
  {
    name: "espanso",
    for: "A text expander that is highly configurable",
    link: "https://espanso.org/",
  },
  {
    name: "flycut",
    for: "A clipboard manager that just works fine",
    link: "https://apps.apple.com/us/app/flycut-clipboard-manager/id442160987?mt=12",
  },
  {
    name: "reactangle",
    for: "window resizer amd mover across multiple monitors",
    link: "https://rectangleapp.com/",
  },
  {
    name: "rocket",
    for: "for emojis",
    link: "https://matthewpalmer.net/rocket/",
  },
  {
    name: "muzzle",
    for: "stop notificatioin when screen sharing",
    link: "https://muzzleapp.com/",
  },
  {
    name: "f.lux",
    for: "adjust screen warmth during night",
    link: "https://justgetflux.com/",
  },
  {
    name: "balenaEtcher",
    for: "for creating flash drives",
    link: "https://www.balena.io/etcher/",
  },
  {
    name: "fig",
    for: "awesome autosuggestion in terminal",
    link: "https://fig.io/",
  },
  {
    name: "keydrawer",
    for: "show keys pressed on screen",
    link: "https://aquatious.com/keydrawer/",
  },
  {
    name: "obsidian",
    for: "the knowledge graph",
    link: "https://obsidian.md/",
  },
  {
    name: "bandwidth+",
    for: "monitoring network speed in menubar",
    link: "https://apps.apple.com/us/app/bandwidth/id490461369?mt=12",
  },
  {
    name: "RDM",
    for: "the monitor screen resolution adjuster app",
    link: "https://github.com/avibrazil/RDM",
  },
  { name: "todoist", for: "todo list manager", link: "https://todoist.com/" },
  {
    name: "tomighty",
    for: "pomodoro technique",
    link: "https://tomighty.github.io/",
  },
  {
    name: "vanilla",
    for: "show hide icons in mac menu bar",
    link: "https://matthewpalmer.net/vanilla/",
  },
  {
    name: "openRTC",
    for: `An in browser screen sharing and video recorder for creating <a target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/channel/UCgwTt4Vw5Azo8yCr2HUvbYQ">youtube</a> videos`,
    link: "https://openrtc.vercel.app/",
  },
];
export default function DateRangePicker() {
  return (
    <Layout>
      <PageHead
        title="Things I use"
        description="List of all tools, electronics, softwares I use in my daily life"
      />
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Things I use</h1>
          <p className="hero__subtitle">
            List of all tools, electronics, softwares I use in my daily life
          </p>
        </div>
      </header>
      <main className={`container padding--lg usesContainer`}>
        <article>
          <header>
            <h2>Softwares</h2>
          </header>
          <ul>
            <li>
              <h3>Developer tools</h3>
            </li>
            <ol type="1">
              {developerTools.map((x) => (
                <li className="padding-bottom--sm">
                  <span>
                    <a href={x.link} className={usesStyles.link}>
                      {x.name}
                    </a>
                  </span>
                  <span>&nbsp;-&nbsp;</span>
                  <span dangerouslySetInnerHTML={{ __html: x.for }}></span>
                </li>
              ))}
            </ol>
            <br />
            <li>
              <h3>Commnad line tools</h3>
            </li>
            <ol>
              {commandLineTools.map((x) => (
                <li className="padding-bottom--sm">
                  <span>
                    <a href={x.link} className={usesStyles.link}>
                      {x.name}
                    </a>
                  </span>
                  <span>&nbsp;-&nbsp;</span>
                  <span dangerouslySetInnerHTML={{ __html: x.for }}></span>
                </li>
              ))}
            </ol>
            <br />
            <li>
              <h3>Productivity tools</h3>
            </li>
            <ol>
              {productivityTools.map((x) => (
                <li className="padding-bottom--sm">
                  <span>
                    <a href={x.link} className={usesStyles.link}>
                      {x.name}
                    </a>
                  </span>
                  <span>&nbsp;-&nbsp;</span>
                  <span dangerouslySetInnerHTML={{ __html: x.for }}></span>
                </li>
              ))}
            </ol>
          </ul>
        </article>
      </main>
    </Layout>
  );
}
