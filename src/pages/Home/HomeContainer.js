import React from "react";
import HomeView from "./HomeView";
import { Link } from "react-router-dom";
import { AUTH_PAGE1, DASHBOARD, PAGE1 } from "navigation/CONSTANTS";
import { LinkRoute } from "components/LinkRoute";
import { NavLinks } from "./components/NavLinks";

export function HomeContainer() {
  return (
    <div>
      <NavLinks />
      <HomeView title="Home" />
    </div>
  );
}
