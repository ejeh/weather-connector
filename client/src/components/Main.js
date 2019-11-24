import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Toolbar, CssBaseline, AppBar } from "@material-ui/core";
import AppBarCollapse from "./AppBarCollapse";
import Search from "./Search";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    color: "white"
  }
});

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar style={{ backgroundColor: "#076380" }}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.title}>
            Weather
          </Typography>
          <AppBarCollapse />
        </Toolbar>
      </AppBar>

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "100px"
          }}
        >
          <div
            style={{
              color: "#076380",
              fontFamily: "-webkit-body",
              textAlign: "center"
            }}
          >
            <Typography variant="h5">Get Weather Updates</Typography>
            <Typography variant="h6">From Around the World</Typography>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px"
          }}
        >
          <Search />
        </div>
      </div>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
