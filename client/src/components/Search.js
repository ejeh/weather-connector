import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import axios from "axios";
import { Typography } from "@material-ui/core";
import weather from "../assets/img/icon-weather.png";
import MysnackBar from "../snackBar";
import Snackbar from "@material-ui/core/Snackbar";

const Styles = theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
});

const initialState = {
  city: "",
  response: "",
  snackBarOpen: false,
  snackBarMessage: "",
  snackBarVariant: "error"
};

class search extends Component {
  state = {
    ...initialState
  };

  clearState() {
    this.setState({ ...initialState });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleData = city => {
    axios
      .get(`/api/v1/weather/search?q=${city}`)
      .then(res => {
        if (res)
          this.setState({
            response: res.data.data,
            snackBarOpen: true,
            snackBarVariant: "success",
            snackBarMessage: res.data.message
          });
      })
      .catch(err => {
        if (err) {
          this.setState({
            snackBarOpen: true,
            snackBarVariant: "error",
            snackBarMessage: err.message
          });
        }
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { city } = this.state;
    if (city) {
      this.handleData(city);
    }
    this.clearState();
  };

  onCloseHandler = () => {
    this.setState({
      snackBarOpen: false
    });
  };

  renderData = () => {
    const { response } = this.state;
    const today = new Date();
    const day = today.getDay();
    const dayList = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const hour = today.getHours();
    const year = today.getFullYear();
    const minute = today.getMinutes();

    if (response) {
      return (
        <div>
          <Typography
            variant="body1"
            style={{ fontFamily: "-webkit-body", fontWeight: "bolder" }}
          >
            {response.name}, {response.sys.country}
          </Typography>
          <Typography variant="body1" style={{ fontFamily: "-webkit-body" }}>
            {dayList[day]} {hour}:{minute}, {year}
          </Typography>
          <div
            style={{
              display: "flex",
              marginTop: "20px"
            }}
          >
            <img src={weather} alt="" width="10%" height="10%" />
            <Typography variant="body1" style={{ fontFamily: "-webkit-body" }}>
              It's {JSON.stringify(response.main.temp)} degree
            </Typography>
            <div style={{ marginLeft: "30px" }}>
              <Typography
                variant="body2"
                style={{ fontFamily: "-webkit-body" }}
              >
                Weather: {JSON.stringify(response.weather[0].description)}
              </Typography>
              <Typography
                variant="body2"
                style={{ fontFamily: "-webkit-body" }}
              >
                Humidity: {JSON.stringify(response.main.humidity)}%
              </Typography>
              <Typography
                variant="body2"
                style={{ fontFamily: "-webkit-body" }}
              >
                Wind: {JSON.stringify(response.wind.speed)}km/h
              </Typography>
            </div>
          </div>
        </div>
      );
    }
  };
  render() {
    const { city, snackBarMessage, snackBarOpen, snackBarVariant } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Paper component="form" className={classes.root}>
          <IconButton className={classes.iconButton} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="Search  Open Weather Map"
            name="city"
            value={city}
            onChange={this.handleChange}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
            onClick={this.handleSubmit}
          >
            <SearchIcon />
          </IconButton>
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton
            color="primary"
            className={classes.iconButton}
            aria-label="directions"
          >
            <DirectionsIcon />
          </IconButton>
        </Paper>
        <div>{this.renderData()}</div>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={snackBarOpen}
          onClose={this.onCloseHandler}
        >
          <MysnackBar
            onClose={this.onCloseHandler}
            variant={snackBarVariant}
            message={snackBarMessage}
          />
        </Snackbar>
      </div>
    );
  }
}

export default withStyles(Styles)(search);
