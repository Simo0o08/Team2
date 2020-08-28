import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles,ThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Switch from '@material-ui/core/Switch';
// import { useForm } from "react-hook-form"; 

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(11),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(15),
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '90%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const initialValue={
  email:'',
  password:''
}
export default function Login() {
  const [darkMode,setDarkMode] = useState(false);
  const [values,setValues] = useState(initialValue);
  const [errors,setErrors] = useState({});
  const classes = useStyles();
  const handleInputChange = e => {
    const {name,value}=e.target
    setValues({
      ...values,
      [name]:value
    })
  }
  const theme=createMuiTheme({
    palette:{
      type:darkMode?"dark":"light"
    }
  })
  const validate=()=>{
    let temp={}
    let pattern =new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g)
    temp.email=pattern.test(values.email)?'':'Email is not valid'
    temp.password=values.password?'':'This field is required'
    setErrors({
      ...temp
    })
    return Object.values(temp).every(x => x == '')
  }
  const handleSubmit = e => {
    e.preventDefault()
    if(validate()){
      window.alert(`${values.email} ${values.password}`)
    }
  }
  return (
    <ThemeProvider theme={theme}>
    <Typography component="h1" variant="h5" className={classes.heading} align="left">
          Cre<Box component="span" color="primary.main">No</Box>
      </Typography>
      <Switch checked={darkMode} onChange={()=>setDarkMode(!darkMode)} >Night Mode</Switch>
    <Container component="main" maxWidth="xs" >
        
    <Card className={classes.paper}>
    <CardContent>
      <CssBaseline />
      <div >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            // required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            {...(errors.email && {error:true,helperText:errors.email})}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={values.password}
            onChange={handleInputChange}
            {...(errors.password && {error:true,helperText:errors.password})}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            
            className={classes.submit}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
      </CardContent>
      </Card>
    </Container>
    </ThemeProvider>
  );
}

