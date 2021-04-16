import React from "react";
import GitalkComponent from "gitalk/dist/gitalk-component";
export default function GitTalkComments() {
  return (
    <>
      <GitalkComponent
        options={{
          clientID: "6a7ee7fe7d7cae5cd831",
          clientSecret: "eeab5ad001eef8695cb95b3c5a487a05508045e9",
          repo: "www",
          owner: "technikhil314",
          admin: ["technikhil314"],
          id: location.pathname.substring(0, 40),
          distractionFreeMode: false,
        }}
      />
    </>
  );
}
