import { Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementAction } from "redux/actions/appActions";

export const Math = () => {
  const { counter } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const add = () => {
    // WITHOUT THUNK MIDDLEWARE you can dispatch only plain ACTION object.
    // dispatch(incrementAction());
    // WITH THUNK MIDDLEWARE you can now dispatch ACTION functions.
    dispatch(increment(5));
  };
  const subtract = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <>
      <Typography variant="h3">Counter example using REDUX:</Typography>
      <Grid
        container
        spacing={3}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" component="div">
            Counter = {counter}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" color="secondary" onClick={() => add()}>
            +
          </Button>
          &nbsp;
          <Button
            variant="contained"
            color="secondary"
            onClick={() => subtract()}
          >
            -
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
