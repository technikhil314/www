import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import Features from "../components/feature";
import styles from "./commonStyles.module.css";

const features = [
  {
    title: <>Easy to Use</>,
    description: (
      <>
        This takes idea from{" "}
        <a href="https://github.com/dangrossman">dangrossman{`'`}s</a> created{" "}
        <a href="https://www.daterangepicker.com/">daterangepicker</a> So some
        of the options from there will work here. Making it easy to compare and
        migrate too. But web has came a long way. Consider using alternative to{" "}
        <a href="https://www.daterangepicker.com/">daterangepicker</a>.
      </>
    ),
  },
  {
    title: <>Uses modern libraries</>,
    description: (
      <>
        This packages uses all modern javascript libraries under it like{" "}
        <a href="https://day.js.org/">dayjs</a> and{" "}
        <a href="https://www.npmjs.com/package/calendarize">calendarise</a> and
        delivers the functionality in just 12kb of javascript footprint. Check
        here more{" "}
        <a href="http://youmightnotneedjquery.com/">
          about whether you need jquery or not
        </a>{" "}
        also moment authors{" "}
        <a href="https://momentjs.com/docs/#/-project-status/">
          ask to use other modern libraries
        </a>
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
