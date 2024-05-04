import BrowserOnly from "@docusaurus/BrowserOnly";
import ColorModeToggle from "@theme-original/Navbar/ColorModeToggle";
import React from "react";
import AuthButtonWrapper from "../../../components/authButtonWrapper";
import LoadingUserImage from "../../../components/LoadingUserImage";

export default function ColorModeToggleWrapper(props) {
  return (
    <>
      <ColorModeToggle {...props} />
      <BrowserOnly fallback={<LoadingUserImage />}>
        {() => <AuthButtonWrapper />}
      </BrowserOnly>
    </>
  );
}
