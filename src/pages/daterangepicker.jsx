import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import ExternalLink from "../components/externalLink";
import Features from "../components/feature";
import styles from "./commonStyles.module.css";

const features = [
  {
    title: <>Easy to Use</>,
    description: (
      <>
        This takes idea from{" "}
        <ExternalLink href="https://github.com/dangrossman">
          dangrossman’s
        </ExternalLink>{" "}
        created{" "}
        <ExternalLink href="https://www.daterangepicker.com/">
          daterangepicker
        </ExternalLink>{" "}
        So some of the options from there will work here. Making it easy to
        compare and migrate too. But web has came a long way. Consider using
        alternative to{" "}
        <ExternalLink href="https://www.daterangepicker.com/">
          daterangepicker
        </ExternalLink>
        .
      </>
    ),
  },
  {
    title: <>Uses modern libraries</>,
    description: (
      <>
        This packages uses all modern javascript libraries under it like{" "}
        <ExternalLink href="https://day.js.org/">dayjs</ExternalLink> and{" "}
        <ExternalLink href="https://www.npmjs.com/package/calendarize">
          calendarise
        </ExternalLink>{" "}
        and delivers the functionality in just 12kb of javascript footprint.
        Check here more{" "}
        <ExternalLink href="http://youmightnotneedjquery.com/">
          about whether you need jquery or not
        </ExternalLink>{" "}
        also moment authors{" "}
        <ExternalLink href="https://momentjs.com/docs/#/-project-status/">
          ask to use other modern libraries
        </ExternalLink>
      </>
    ),
  },
  {
    title: <>Comes with timepicker and touch friendly UI</>,
    description: (
      <>
        This package give additional functionality of timepicker that is easy to
        use and configure. Plus it give nice touch friendly UI for touch
        devices.
      </>
    ),
  },
];

export default function DateRangePicker() {
  return (
    <Layout
      title="Date Range Picker"
      description="A light weight date range picker without jquery dependancy. And it uses all advanced internationalisation features from latest browsers."
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Date Range Picker</h1>
          <p className="hero__subtitle">
            A light weight date range picker without jquery dependancy. And it
            uses all advanced internationalisation features from latest
            browsers.
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/daterangepicker/introduction")}
            >
              Go to Documentation
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && <Features features={features} />}
      </main>
    </Layout>
  );
}
