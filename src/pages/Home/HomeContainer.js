import React from "react";
import HomeView from "./HomeView";
import { Link } from "react-router-dom";
import { DASHBOARD, PAGE1 } from "navigation/CONSTANTS";
import { LinkRoute } from "components/LinkRoute";

export function HomeContainer() {
  return (
    <div>
      {/* Default Link tag. Make sure you always use Link from 'react-router-dom' and not from '@materialui...' */}
      <Link to={DASHBOARD}>Dashboard</Link>
      {/* Common component created for all Link tags to be used. Thus, avoiding reputation of any styling and universal reuse */}
      <LinkRoute to={PAGE1}>Page 1</LinkRoute>
      <HomeView title="Home" />
    </div>
  );
}
