import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import DropdownNavbarItem from "@theme-original/NavbarItem/DropdownNavbarItem";
import clsx from "clsx";
import React from "react";
import "../css/authButtonWrapper.css";
import LoadingUserImage from "./LoadingUserImage";

export function AuthButton() {
  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window ? window.location.origin : "/",
      },
    });
  const { user, isAuthenticated, loginWithRedirect, logout, isLoading, error } =
    useAuth0();
  if (error) {
    console.error(error);
  }
  if (isLoading) {
    return <LoadingUserImage />;
  }
  if (!isAuthenticated) {
    return (
      <button
        type="button"
        className={clsx(
          "button button--primary button--outline button--md mx-2"
        )}
        onClick={() => {
          try {
            loginWithRedirect();
          } catch (err) {
            console.error(err);
          }
        }}
      >
        Login
      </button>
    );
  }
  if (isAuthenticated) {
    return (
      <DropdownNavbarItem
        className="inline-flex items-center justify-center w-12 customDropDown"
        label={
          <img
            alt={user.nickname}
            className="object-contain w-8 h-8 rounded-full bg-slate-700 aspect-square"
            src={user.picture}
          ></img>
        }
        items={[
          // {
          //   to: "myProfile",
          //   label: "Profile",
          // },
          {
            to: "#",
            label: "Log out",
            className: "w-16",
            onClick: (evt) => {
              evt.preventDefault();
              try {
                logoutWithRedirect();
              } catch (err) {
                console.error(err);
              }
            },
          },
        ]}
      />
    );
  }
}

export default function AuthButtonWrapper() {
  const onRedirectCallback = (appState) => {
    if (appState && appState.returnTo) {
      history.pushState(null, null, appState.returnTo);
    } else if (window) {
      history.pushState(null, null, window.location.pathname);
    } else {
      history.pushState(null, null, "/");
    }
  };

  const providerConfig = {
    domain: "dev-0d6ovcq72ytpte37.uk.auth0.com",
    clientId: "MZBzkphHdIuK574uFYfivipUNG6j4qrx",
    onRedirectCallback,
    authorizationParams: {
      redirect_uri: window ? window.location.origin : process.env.HOST_NAME,
      audience: "https://dev-0d6ovcq72ytpte37.uk.auth0.com/api/v2/",
    },
  };
  return (
    <Auth0Provider {...providerConfig}>
      <AuthButton />
    </Auth0Provider>
  );
}
