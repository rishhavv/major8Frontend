import React from "react";
import toast, { Toaster } from "react-hot-toast";

import "react-toastify/dist/ReactToastify.css";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

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

export const VolunteerForm = () => {
  const classes = useStyles();
  const notify = () => toast.success("Volunteer Form submitted");
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
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Volunteer Form
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            on
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Age"
            label="Age"
            id="program"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="program"
            label="Programs Interested in"
            id="program"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Availability"
            label="Availability"
            id="program"
          />

          <Button
            fullWidth
            variant="contained"
            color="plum"
            className={() => {
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

export default VolunteerForm;
