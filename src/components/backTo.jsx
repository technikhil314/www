import Link from "@docusaurus/Link";
import React from "react";

export default function BackTo({ url, text }) {
  return (
    <Link
      to={url}
      className="items-center block col col--12 padding-left--none margin-bottom--lg"
    >
      <svg
        className="margin-right--sm"
        viewBox="0 0 15 15"
        fill="none"
        style={{
          height: "100%",
          width: "1em",
          position: "relative",
          top: "2px",
        }}
      >
        <path d="M1.5 7.5l4-4m-4 4l4 4m-4-4H14" stroke="currentColor"></path>
      </svg>
      {text}
    </Link>
  );
}
