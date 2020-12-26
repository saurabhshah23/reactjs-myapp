import React from "react";
import { DashboardView } from "./DashboardView";
import { Link } from "react-router-dom";
import { ROOT } from "navigation/CONSTANTS";

export const DashboardContainer = () => {
  return (
    <div>
      <Link to={ROOT}>Home</Link>
      <DashboardView />
    </div>
  );
};
