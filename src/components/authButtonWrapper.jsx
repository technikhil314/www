import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import DropdownNavbarItem from "@theme-original/NavbarItem/DropdownNavbarItem";
import clsx from "clsx";
import React from "react";
import "../css/authButtonWrapper.css";

export function AuthButton() {
  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window ? window.location.origin : "/",
      },
    });
  const { user, isAuthenticated, loginWithPopup, logout, isLoading, error } =
    useAuth0();
  if (error) {
    console.error(error);
  }
  if (isLoading) {
    return (
      <div className="max-w-sm px-4 mx-auto border border-blue-300 rounded-md shadow">
        <div className="flex space-x-4 animate-pulse">
          <div className="w-8 h-8 rounded-full bg-slate-700"></div>
        </div>
      </div>
    );
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
            loginWithPopup();
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
      history.push(appState.returnTo);
    } else if (window) {
      history.push(window.location.pathname);
    } else {
      history.push("/");
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
