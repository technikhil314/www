import Layout from "@theme/Layout";
import clsx from "clsx";
import PageHead from "../components/head";
import styles from "./commonStyles.module.css";
import React from "react";
import usesStyles from "./uses.module.css";
import { camelToSentenseCase } from "../helpers/utils";

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
    name: "oh-my-zsh",
    for: "the zsh plugin and customization framework",
    link: "https://ohmyz.sh/",
  },
  {
    name: "starship",
    for: "a cross shell fast shell prompt",
    link: "https://starship.rs/",
  },
  {
    name: "nush",
    for: "another shell (trying out)",
    link: "https://github.com/nushell/nushell",
  },
  {
    name: "vscode (stable version)",
    for: "The primary editor for all development related tasks",
    link: "https://code.visualstudio.com/",
  },
  {
    name: "git",
    for: "the de-facto source control management tool",
    link: "https://git-scm.com/",
  },
];
const commandLineTools = [
  {
    name: "imagemagick",
    for: "Provides the <code>convert</code>/<code>magick</code> command for converting images from one format to another",
    link: "https://imagemagick.org/script/convert.php",
  },
  {
    name: "imagemin-cli",
    for: "to optimize images for web development optimization purpose",
    link: "https://github.com/imagemin/imagemin-cli",
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
  {
    name: "jwt",
    for: "encoding and decoding jwt tokens right in your terminal",
    link: "https://github.com/mike-engel/jwt-cli",
  },
  {
    name: "acsiinema",
    for: "for recording terminals as lightweight casts",
    link: "https://asciinema.org/",
  },
  {
    name: "svg-term-cli",
    for: "to convert asciicasts to animated svgs",
    link: "https://github.com/marionebl/svg-term-cli",
  },
  {
    name: "terminalizer",
    for: "a command line tool to record terminal session and render them as gif",
    link: "https://github.com/faressoft/terminalizer",
  },
  {
    name: "curl",
    for: "the de-facto command to HTTP related things",
    link: "https://curl.se/",
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
const others = [
  {
    name: "jetbrains mono Font (with ligatures support)",
    for: "For all coding purposes",
    link: "https://www.nerdfonts.com",
  },
  {
    name: "vlc media player",
    for: "the best in class media player",
    link: "https://www.videolan.org/",
  },
  {
    name: "discord",
    for: "for community connect and for queries related to specific topics",
    link: "https://discord.com/",
  },
];
const officialTools = [
  {
    name: "slack",
    for: "official communication channel at organization",
    link: "https://www.slack.com/",
  },
  {
    name: "microsoft outlook",
    for: "official email client",
    link: "https://www.microsoft.com/en-in/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook",
  },
  {
    name: "microsoft team",
    for: "official conferencing client",
    link: "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software",
  },
];
const onlineTools = [];
const chromePlugins = [
  {
    name: "",
    for: "",
    link: "",
  },
];
const zshPlugins = [];
const vimPlugins = [];
const electronics = [
  {
    name: "Monitor",
    for: "Lenovo ThinkVision P24h-2L 60.4cms (23.8) QHD Natural Low Blue Light Monitor with USB C support and daisy chain support",
    link: "https://www.lenovo.com/in/en/accessories-and-monitors/monitors/professional/P24h-2LA19238QP123-8-inch-Monitor-HDMI/p/62B2GAR1WW",
  },
  {
    name: "Laptop",
    for: "MacBook Pro (16-inch, 2019) 2.4 GHz 8-Core Intel Core i9 64 GB 2667 MHz DDR4 Intel UHD Graphics 630 1536 MB",
    link: "https://www.apple.com/in/macbook-pro/",
  },
  {
    name: "Mouse",
    for: "Apple magic mouse 2",
    link: "https://www.amazon.in/Apple-Magic-MLA02ZM-Mouse-White/dp/B016UPAVDE?&_encoding=UTF8&tag=technikhil314-21&linkCode=ur2&linkId=0d94105723d8904ea3e25221d48d720f&camp=3638&creative=24630",
  },
  {
    name: "Headphones",
    for: "One plus nord buds True wireles headphones",
    link: "https://www.amazon.in/gp/product/B09ZHPN8W5/?&_encoding=UTF8&tag=technikhil314-21&linkCode=ur2&linkId=7265cf0cf89eeccbe92538ae47a1cf8a&camp=3638&creative=24630",
  },
  {
    name: "Mobile",
    for: "Redmi note 7 pro",
    link: "https://www.mi.com/in/redmi-note-7-pro/",
  },
  {
    name: "Keyboard",
    for: "Redgear invador MK881 Mechanical Wired Gaming Keyboard with Kailh Brown switches",
    link: "https://www.amazon.in/gp/product/B07989JYRS/?&_encoding=UTF8&tag=technikhil314-21&linkCode=ur2&linkId=dcf2a9a7e963973999e3276ed00b5aae&camp=3638&creative=24630",
  },
  {
    name: "Dell type C adaptor for Mac book pro",
    for: "For connecting monitor and other USB A devices to Mac Book pro",
    link: "https://www.amazon.in/Dell-1960034-Da200-USB-C-Multi-Adapter/dp/B012DT6KW2?&_encoding=UTF8&tag=technikhil314-21&linkCode=ur2&linkId=94d2526eef2d1fb35155fb10a3f6d616&camp=3638&creative=24630",
  },
];
const otherPhysicals = [
  {
    name: "Lapcare laptop cooling pad",
    for: "For cooling my intel mac",
    link: "https://www.amazon.in/Lapcare-ChillMate-DCX-A101-Laptop-Cooler/dp/B074C8C6F4?&_encoding=UTF8&tag=technikhil314-21&linkCode=ur2&linkId=3c83f2ef0135918dceab2d81edd853f7&camp=3638&creative=24630",
  },
  {
    name: "HP v236w 64GB USB 2.0 Pen Drive",
    for: "USB drive",
    link: "https://www.amazon.in/gp/product/B01L8ZNWN2?&_encoding=UTF8&tag=technikhil314-21&linkCode=ur2&linkId=3f1f6c3e1712a4b5aba58d8131c1cbb8&camp=3638&creative=24630",
  },
];
const vsCodeExtensions = [];

const softwares = {
  developerTools,
  commandLineTools,
  productivityTools,
  others,
  officialTools,
  vsCodeExtensions,
  chromePlugins,
  vimPlugins,
  zshPlugins,
  onlineTools,
};
const hardwares = {
  electronics,
  otherPhysicals,
};
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
          <p>
            <small>
              I am still compiling the list. So you may see some issues on the
              list or incomplete lists.
            </small>
          </p>
        </div>
      </header>
      <main className={`container padding--lg usesContainer`}>
        <article>
          <header>
            <h2>Softwares</h2>
          </header>
          <ul>
            {Object.keys(softwares).map((category) => (
              <React.Fragment key={category}>
                <li>
                  <h3>
                    <a href={`#${category}`}>{camelToSentenseCase(category)}</a>
                  </h3>
                </li>
                <ol type="1" id={category}>
                  {softwares[category].map((x) => (
                    <li className="padding-bottom--sm" key={x.name}>
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
              </React.Fragment>
            ))}
          </ul>
        </article>
        <br />
        <article>
          <header>
            <h2>Hardwares</h2>
          </header>
          <ul>
            {Object.keys(hardwares).map((category) => (
              <React.Fragment key={category}>
                <li>
                  <h3>
                    <a href={`#${category}`}>{camelToSentenseCase(category)}</a>
                  </h3>
                </li>
                <ol type="1" id={category}>
                  {hardwares[category].map((x) => (
                    <li className="padding-bottom--sm" key={x.name}>
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
              </React.Fragment>
            ))}
          </ul>
        </article>
      </main>
    </Layout>
  );
}
