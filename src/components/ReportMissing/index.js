import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const ReportMissing = () => {
  const classes = useStyles();
  const notify = () => toast.success("Missing report submitted");
  const [url, setImageUrl] = useState("");
  const [desc, setDesc] = useState("");
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImageUrl(URL.createObjectURL(img));
      console.log("url is ", url);
    }
  };

  const handleSubmit = () => {
    console.log("this is ", name, desc);
    axios
      .post("https://major8.herokuapp.com/major/report-missing", {
        desc: desc,
        name: name,
        isMissing: true,
        url: "assets/post/pet4.jpeg",
      })
      .then((res) => {
        console.log("response ", res);
      })
      .catch((e) => console.log("error is ", e));
  };

  const handleName = (e) => {
    setName(e.target.value);
    console.log("name is  ", name);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
    console.log("desc is  ", desc);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Toaster
        position="top-center"
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#ffffff",
            color: "#3A4374",
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: "#1913AE",
              secondary: "#ffffff",
              height: 50,
            },
          },
          error: {
            iconTheme: {
              primary: "#D73737",
              secondary: "#ffffff",
            },
          },
        }}
      />
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          🐕 Report A Pet Missing
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            onChange={handleName}
            label="Name of Missing Pet"
            name="name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="desc"
            label="Description"
            onChange={handleDesc}
            name="desc"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="desc"
            label="Owner Details"
            onChange={(e) => setOwner(e.target.value)}
            name="Owner Details"
            autoFocus
          />
          <input type="file" name="myimage" onChange={onImageChange}></input>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => {
              handleSubmit();
              notify();
            }}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ReportMissing;
