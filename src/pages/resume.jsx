import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import PageHead from "../components/head";
import pageStyles from "./resume.module.css";
export default function Portfolio() {
  return (
    <>
      <PageHead title={`Nikhil Mehta's resume`} />
      <div className="container padding--xl resume">
        <article>
          <header className="row row--no-gutters">
            <div className="col col--6">
              <h1 className="margin-bottom--xs">Nikhil Mehta</h1>
              <h3 className="margin-bottom-none">Senior Software Engineer</h3>
            </div>
            <div className="col col--6">
              <ul className="text-xl">
                <li>Email id: nikhil.001mehta@gmail.com</li>
                <li>Contact Number: +91 9028 6816 06</li>
              </ul>
            </div>
          </header>
        </article>
        <article></article>
      </div>
    </>
  );
}
