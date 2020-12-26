import React from "react";
import HomeView from "./HomeView";
import { Link } from "react-router-dom";
import { DASHBOARD } from "navigation/CONSTANTS";

export function HomeContainer() {
  return (
    <div>
      <Link to={DASHBOARD}>Dashboard</Link>
      <HomeView title="Home" />
    </div>
  );
}
