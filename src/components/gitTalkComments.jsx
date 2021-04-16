import BrowserOnly from "@docusaurus/BrowserOnly";
import GitalkComponent from "gitalk/dist/gitalk-component";
import React from "react";

export default function GitTalkComments() {
  return (
    <BrowserOnly fallback={<div>Loading comments...</div>}>
      {() => {
        return (
          <div className="gt-container">
            <GitalkComponent
              options={{
                repo: "www",
                owner: "technikhil314",
                admin: ["technikhil314"],
                id: location.pathname
                  .split("blog/")[1]
                  .substring(0, 40)
                  .replace(/\//g, ""),
                distractionFreeMode: false,
              }}
            />
          </div>
        );
      }}
    </BrowserOnly>
  );
}
