import React, { createContext, useContext, useState, useEffect } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";

export const AUTH_ROLES = {
  USER: "user",
  ADMIN: "admin",
};
export const AUTH_REDIRECTS = {
  [AUTH_ROLES.USER]: "/app/user",
  [AUTH_ROLES.ADMIN]: "/app/admin",
};

/**
 * @param {Component} Children -> Component to be added guard to
 * @param {string} [role] -> any of AUTH_ROLES, pass the role for which the route should be accessible
 * @param {string} [redirectTo="auth/login"] -> redirect path if not authenticated defaults to /auth/login
 * @return {Component}  return the component if user is authenticated else redirects the user to redirect URL
 */

function authComp(Children, role, redirectTo = "/auth/login") {


  return ({ userState: { role },
    ...rest }) => {
    const router = useRouter();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      setLoaded(true);
    }, []);

    const res = !loaded ? null : !role ? router.push("/auth/login") && null : (
      role !== "" &&
      <Children {...rest} />
    );

    return res;

  };
}

const mapStateToProps = (state) => ({
  userState: state.userData,
});

const withAuth = (WrapperComponent, role, redirectTo) =>
  connect(
    mapStateToProps,
  )(authComp(WrapperComponent, role, redirectTo));

export default withAuth;
