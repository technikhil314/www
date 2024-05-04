import BrowserOnly from "@docusaurus/BrowserOnly";
import ColorModeToggle from "@theme-original/Navbar/ColorModeToggle";
import React from "react";
import AuthButtonWrapper from "../../../components/authButtonWrapper";

export default function ColorModeToggleWrapper(props) {
  return (
    <>
      <ColorModeToggle {...props} />
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => <AuthButtonWrapper />}
      </BrowserOnly>
    </>
  );
}
