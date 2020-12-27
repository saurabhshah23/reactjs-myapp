import React, { useEffect, useState } from "react";
import { DashboardView } from "./DashboardView";
import { Link } from "react-router-dom";
import { ROOT } from "navigation/CONSTANTS";
import { UserList } from "./UserList";
import {
  CircularProgress,
  Typography,
} from "@material-ui/core";
import { getAllUsers } from "services";

export const DashboardContainer = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllUsers()
      .then((res) => {
        console.log("Dashboard > getAllUsers > res=", res);
        setUsers(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("axios err=", err);
        setUsers([]);
        setIsLoading(false);
      });

    return () => {
      console.log("axios cleanup.");
    };
  }, []);

  const NoUserList = <Typography variant="body2">No users found!</Typography>;

  return (
    <div>
      <Link to={ROOT}>Home</Link>
      <DashboardView />
      {isLoading ? (
        <CircularProgress />
      ) : users ? (
        <UserList users={users} />
      ) : (
        NoUserList
      )}
    </div>
  );
};
