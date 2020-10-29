import React from "react";
export const CodePen = ({ codepenId }) => (
  <iframe
    height="500"
    width="100%"
    scrolling="no"
    title="Form With TnC Accessibility"
    src={`https://codepen.io/nikhil-001mehta/embed/${codepenId}?height=265&theme-id=dark&default-tab=html,result`}
    frameborder="no"
    allowtransparency="true"
    allowfullscreen="true"
  ></iframe>
);
