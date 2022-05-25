import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const ReportMissing=()=> {
  const classes = useStyles();

  const [url,setImageUrl]=useState('')
  const [desc,setDesc]=useState('')
  const [name,setName]=useState('')


 const  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImageUrl(URL.createObjectURL(img));
      console.log("url is ",url)
    }
  };

  const handleSubmit=()=>{
    console.log("this is ",name ,desc)
    axios.post('https://major8.herokuapp.com/major/report-missing',{
      desc:desc,
      name:name,
      isMissing:true,
      url: "assets/post/pet4.jpeg"
    }).then((res)=>{
      console.log("response ",res)
    }).catch((e)=>console.log("error is ",e))
  }

  const handleName=(e)=>{
    setName(e.target.value)
    console.log("name is  ",name)
  }
  const handleDesc=(e)=>{
    setDesc(e.target.value)
    console.log("desc is  ",desc)
  }
 
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Report A Pet Missing
        </Typography>
        <form className={classes.form} noValidate >
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
            label="Description and Address"
            onChange={handleDesc}
            name="desc"
            autoFocus

          />
          <input type='file' name="myimage" onChange={onImageChange}></input>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
      
    </Container>
  );
}

export default ReportMissing