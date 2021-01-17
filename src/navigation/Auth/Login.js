import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "./ProvideAuth";
import { LinkRoute } from "components/LinkRoute";
import { ROOT } from "navigation/CONSTANTS";
import { Button, Typography } from "@material-ui/core";
import LoadingButton from "components/LoadingButton";

export default function Login() {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  let { from } = location.state || { from: { pathname: "/" } };
  console.log("SS:: req came from:", from);
  let login = () => {
    setIsLoading(true);
    console.log("SS:: login btn clicked...");
    auth.signin().then((res) => {
      // history.replace(from);
      // setIsLoading(false);
      setTimeout(()=>{
        history.replace(from);
        setIsLoading(false);
      },2000);
      console.log("SS:: logged in successfully by:", res);
    });
  };

  return (
    <>
      <LinkRoute to={ROOT}>Home</LinkRoute>
      <Typography variant="h2">Login Page</Typography>
      <br />
      <p>You must log in to view the page: {from.pathname}</p>
      {/* <Button variant="contained" color="secondary" onClick={login}>Log in</Button> */}
      <LoadingButton isLoading={isLoading} onClick={login}>Log in</LoadingButton>
    </>
  );
}
