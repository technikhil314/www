import BrowserOnly from "@docusaurus/BrowserOnly";
import GitalkComponent from "gitalk/dist/gitalk-component";
import React from "react";

export default function GitTalkComments() {
  return (
    <BrowserOnly fallback={<div>Loading comments...</div>}>
      {() => {
        return (
          <GitalkComponent
            options={{
              clientID: "6a7ee7fe7d7cae5cd831",
              clientSecret: "eeab5ad001eef8695cb95b3c5a487a05508045e9",
              repo: "www",
              owner: "technikhil314",
              admin: ["technikhil314"],
              id: location.pathname.split("blog/")[1].substring(0, 40),
              distractionFreeMode: false,
            }}
          />
        );
      }}
    </BrowserOnly>
  );
}
