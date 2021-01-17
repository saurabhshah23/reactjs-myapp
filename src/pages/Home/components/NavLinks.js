import React from "react";
import { Link } from "react-router-dom";
import { LinkRoute } from "components/LinkRoute";
import {DASHBOARD, LOGIN, PAGE1,AUTH_PAGE1, ROOT} from "navigation/CONSTANTS";

export const NavLinks = () => {
  return (
    <>
      {/* Default Link tag. Make sure you always use Link from 'react-router-dom' and not from '@materialui...' */}
      <Link to={ROOT}>Root</Link>
      {/* Common component created for all Link tags to be used. Thus, avoiding reputation of any styling and universal reuse */}
      <LinkRoute to={DASHBOARD}>Dashboard</LinkRoute>
      <LinkRoute to={LOGIN}>Login</LinkRoute>
      <LinkRoute to={PAGE1}>Page 1</LinkRoute>
      <LinkRoute to={"/undefinedRoute"}>Undefined Page</LinkRoute>
      <LinkRoute to={AUTH_PAGE1}>Auth Page 1</LinkRoute>
    </>
  );
};
