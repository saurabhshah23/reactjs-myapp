import React from "react";
import PropTypes from "prop-types";
import {
  CircularProgress,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { ArrowForwardOutlined as ArrowForwardIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export const UserList = ({users}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        {/* <Typography variant="h6" className={classes.title}> */}
        <Typography variant="h6">
          List of users fetched from jsonplaceholder:
        </Typography>
        {/* <div className={classes.demo}> */}
        <div>
          <List dense={false}>
            {users.map((user) => (
              <ListItem key={user.id}>
                <ListItemIcon>
                  <ArrowForwardIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={user.name} />
              </ListItem>
            ))}
          </List>
        </div>
      </Grid>
    </Grid>
  );
};

UserList.propTypes = {
    users: PropTypes.array.isRequired
};
