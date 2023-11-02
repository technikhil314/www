import React from "react";
export const CodePen = ({ codePenEmbedUrl }) => (
  <iframe
    height="500"
    width="100%"
    title=""
    src={`${codePenEmbedUrl}?height=265&theme-id=dark&default-tab=result`}
  ></iframe>
);
