import useThemeContext from "@theme/hooks/useThemeContext";
import React, { useEffect, useRef } from "react";

export default function Comments() {
  const blogWrapperRef = useRef();
  const { isDarkTheme } = useThemeContext();
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.setAttribute("repo", "technikhil314/www");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("label", "comment-label");
    const currentTheme = isDarkTheme ? "github-dark" : "github-light";
    script.setAttribute("theme", currentTheme);
    script.setAttribute("crossOrigin", "anonymous");
    script.setAttribute("async", "true");
    blogWrapperRef.current.appendChild(script);
    return () => {
      const comments = blogWrapperRef.current.querySelector(".utterances");
      blogWrapperRef.current.removeChild(comments);
    };
  }, [isDarkTheme]);
  return <div ref={blogWrapperRef}></div>;
}
