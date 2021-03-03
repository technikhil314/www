import React from "react";
import ExternalLink from "../../src/components/externalLink";
export const SubHeader = () => {
  return (
    <>
      <nav className="navbar sub-navbar navbar--light navbar--fixed-top">
        <div className="navbar__inner">
          <div className="navbar__items">
            <ExternalLink href="https://www.buymeacoffee.com/technikhil314">
              <img
                src="https://cdn.buymeacoffee.com/buttons/default-orange.png"
                alt="Buy Me A Coffee"
                style={{ maxWidth: "90%" }}
                width={180}
              />
            </ExternalLink>
          </div>
          <div className="navbar__items navbar__items--right">
            <ExternalLink href="https://paypal.me/technikhil314">
              <img
                src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-200px.png"
                alt="PayPal Logo"
                style={{ maxWidth: "90%" }}
                width={180}
              />
            </ExternalLink>
          </div>
        </div>
      </nav>
      <br />
    </>
  );
};
