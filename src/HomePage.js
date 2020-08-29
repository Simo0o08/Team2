import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import './myStyle.css'
import SimpleModal from './SimpleModal';
import Modal from '@material-ui/core/Modal';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
    all:{

        borderRadius: 50,
        backgroundColor: '#289CFF',
        color:'white',


    },
    goodReads:{
        borderRadius: 50,
    },
    tags:{
        borderRadius: 50,
    },
    newNote:{
        borderRadius: 50,
        marginLeft: theme.spacing(90),
        backgroundColor : '#289CFF',
        padding: theme.spacing(1),
        padding: '0 30px',
        borderColor: '#289CFF',
        height: '100%'
    },

  
   

    edit : {
        borderColor: '#289CFF',
        backgroundColor:'#289CFF',
        color: 'white',
        borderRadius: 25,
    },
  col : {
    height: '1%',
    backgroundColor: '#EC407A',
    borderRadius: '10',

  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(0),
  },
  cardGrid: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
    marginLeft: theme.spacing(0),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  paper: {
    position: 'absolute',
    width: 800,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(0),
    minWidth: 100,
    float:'right'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  topic:{
    width: 600,
  }
}));

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

const saveData=()=>{
  alert("hyy");
  return(
    <div>
    <SimpleModal />
    </div>
  );
  }

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const cards = [1,2,3,4,5,6,7,8,9];

export default function HomePage() {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };




  const body = (
    <div style={modalStyle} className={classes.paper}>
      <form className={classes.container} noValidate>
      <TextField
        id="date"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Tags</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Daily Journal</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <TextField id="standard-basic" label="Topic" className={classes.topic}/>
      <textarea type="text" id="simple-modal-description" className="modalTextArea" />
      <button className="delete">Delete</button> &nbsp;&nbsp;&nbsp;&nbsp;
      <button className="save" onClick={saveData}>Save</button>
      <Modal/>
    </div>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <SimpleModal /> */}
      <h2 className="cre">Cre</h2><h2 className="no">No</h2>
           <input type='text' className='searchTextField' placeholder="   Hello"   />
           <button className="Search">Search</button>
           <div className="userProfile">Simran Keswani</div>
           <div className="image"><img src="https://img.pngio.com/download-free-png-stockvader-predicted-adig-user-profile-icon-user-profile-png-880_880.png" alt="Avatar" className="avatar" /></div>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container>

            <div className={classes.heroButtons}>
              <Grid container spacing={2}>
                <Grid item>
                  <Button variant="contained" className={classes.all} >
                    All
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" className={classes.goodReads}>
                    Good Reads
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" className={classes.tags}>
                    Tags
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" className={classes.newNote} onClick={saveData}>
                    +Add a new Note
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
        {body}
        
      </Modal>
        <Container className={classes.cardGrid} maxWidth="md">
         
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                 
                  <CardContent className={classes.cardContent}>
                      <div className={classes.col}></div>
                  Aug 24, 2020
                    <Typography gutterBottom variant="h5" component="h2">
                    Let’s make something cool this weekend together
                    </Typography>
                    <Typography>
                    We can create a cool note taking app this using react js and node js. App must have login and signup option for user and user can create, read update and delete option for user. User can stack related notes together.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    
                    <Button size="small" className={classes.edit}>
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      {/* <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer> */}
      {/* End footer */}
    </React.Fragment>
  );
}
