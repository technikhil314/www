import React from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function PageHead({ title, description = null }) {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const desc = description || siteConfig.tagline;
  return (
    <Head>
      <title>{title}</title>
      {/* For discord */}
      <meta
        name="og:image"
        property="og:image"
        content={`${process.env.HOST_NAME}/brand-430x495.png`}
        key={`${process.env.HOST_NAME}/brand-430x495.png`}
      />
      {/* For browser */}
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" sizes="57x57" href="/57x57.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/180x180.png" />
      <meta name="twitter:title" content={title} />
      <meta name="og:title" property="og:title" content={title} />
      <meta property="og:type" name="og:type" content="website" />
      <meta name="description" content={desc} />
      <meta property="og:description" name="og:description" content={desc} />
      <meta name="twitter:description" content={desc} />
      <meta property="og:url" name="og:url" content={process.env.HOST_NAME} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@technikhil314" />
      {/* For telegram */}
      <meta
        property="og:image"
        name="og:image"
        content={`${process.env.HOST_NAME}/128x128.png`}
        key={`${process.env.HOST_NAME}/128x128.png`}
      />
      <meta
        property="og:image"
        name="og:image"
        content={`${process.env.HOST_NAME}/brand-192x192.png`}
        key={`${process.env.HOST_NAME}/brand-192x192.png`}
      />
      {/* for facebook */}
      <meta
        property="og:image"
        name="og:image"
        content={`${process.env.HOST_NAME}/brand-200x200.png`}
        key={`${process.env.HOST_NAME}/brand-200x200.png`}
      />
      {/* for whatsapp */}
      <meta
        property="og:image"
        name="og:image"
        content={`${process.env.HOST_NAME}/brand-512x512.png`}
        key={`${process.env.HOST_NAME}/brand-512x512.png`}
      />
      {/* for linkedin 800x800 ideal is 1200x695 */}
      <meta
        property="og:image"
        name="og:image"
        content={`${process.env.HOST_NAME}/brand-800x800.png`}
        key={`${process.env.HOST_NAME}/brand-800x800.png`}
      />
      <meta
        name="image"
        property="og:image"
        content={`${process.env.HOST_NAME}/brand-1200x600.png`}
      ></meta>
      <meta
        name="og:image:alt"
        property="og:image:alt"
        content={siteConfig.tagline}
      />
      {/* for twitter */}
      <meta
        name="twitter:image"
        content={`${process.env.HOST_NAME}/128x128.png`}
      />
    </Head>
  );
}
