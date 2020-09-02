import React,{useState} from 'react';
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
//import Link from '@material-ui/core/Link';
import {Link} from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './myStyle.css'
// import SimpleModal from './SimpleModal';
import Modal from '@material-ui/core/Modal';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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
    
  
    edit : {
        borderColor: '#289CFF',
        backgroundColor:'#289CFF',
        color: 'white',
        borderRadius: 25,
    },
  col : {
    height: '8%',
    backgroundColor: '#ff007f',
    borderRadius: '10',

  },
 DivRang : {
    height: '10%',
    backgroundColor: '#289CFF',
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
    width: 350,
    marginBottom: theme.spacing(2),
  }
}));

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const cards = [];

export default function HomePage() {
  const classes = useStyles();
  
  var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear();
  const [state, setState] = useState({'title':'','desc':'','tag':'','date':date + '/' + month + '/' + year})
  const handleInputChange = e => {
    const {name,value}=e.target
    setState({
      ...state,
      [name]:value,
      // date:selectedDate
    })
  }
  const saveData = e => {
    e.preventDefault()
    // window.alert(`${state.agts} ${state.topic} ${state.desc} ${state.date}`)
    cards.push(state);
    setState({'title':'','desc':'','tag':'','date':date + '/' + month + '/' + year})
    setOpen(false);
  }

  // const [selectedDate, setSelectedDate] = React.useState(new Date('2020-08-18T21:11:54'));

  // const handleDateChange = (date) => {
  //   setSelectedDate(date).toString();
  // };

  const [modalStyle] = React.useState(getModalStyle);
  const [search, setSearch] = React.useState('');
  const [my_value,setValue]=useState(false);

  const searchSpace = e => {
    setSearch(e.target.value);
  };
  const searchFrom=()=>{
    setValue(true);
    console.log(search);
    console.log("byeee");
    console.log(my_value);

    
  }
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  // const editModal = (date,title,desc) => {
  //   setOpen(true);
  // alert(`${date}`);
  //  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const body = (
    <div style={modalStyle} className="paper">
      {/* <form className={classes.container} noValidate>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          name='date'
          value={state.date}
          onChange={handleInputChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </Grid>
    </MuiPickersUtilsProvider>
    </form> */}
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label" className="tag">Tags</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="tags"
          value={state.tags}
          onChange={handleInputChange}
        >
          <MenuItem value={10}>Journal</MenuItem>
          <MenuItem value={20}>Life</MenuItem>
          <MenuItem value={30}>Art</MenuItem>
        </Select>
      </FormControl>
      <TextField id="standard-basic" label="Topic" className={classes.topic} name="topic"
          value={state.topic} onChange={handleInputChange}/>
          <br></br>
      <textarea type="text" id="simple-modal-description" className="modalTextArea" name="desc"
          value={state.desc} onChange={handleInputChange}/>
      <button className="delete">Delete</button> &nbsp;&nbsp;&nbsp;&nbsp;
      <button className="save" onClick={saveData}>Save</button>
      <Modal/>
    </div>
  );

      return(
    <React.Fragment>
      <CssBaseline />
      {/* <SimpleModal /> */}
      <h2 className="cre">Cre</h2><h2 className="no">No</h2>
           <input type='text' className='searchTextField' placeholder="   Hello"  name='search' value={search} onChange={searchSpace} />
           <button className="Search" onClick={searchFrom}>Search</button>
          <Link to="Profiles" style={{textDecoration:"none",color:"black"}}>
           <div className="userProfile1">Simran Keswani</div>
           <div className="image1"><img src="https://img.pngio.com/download-free-png-stockvader-predicted-adig-user-profile-icon-user-profile-png-880_880.png" alt="Avatar" className="avatar1" /></div>
      </Link>
      <Link to="/" style={{textDecoration:"none",color:"black"}}><button className="logout">Logout</button></Link>
      <button className="newNote" onClick={handleOpen} >
         +Add a new Note
        </button>
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
            { 
              my_value 
                ?
                  cards.filter(obj=>obj.desc.includes(search) || obj.topic.includes(search)).map(
                    (card,index) => (
                      <Grid item key={index} xs={12} sm={6} md={4}>                
                      
                        <Card className={classes.card}> 
                          <CardContent className={classes.cardContent}>
                          <div className={classes.col}></div>
                              {card.date}
                            <Typography gutterBottom variant="h5" component="h2">
                            {card.topic}
                            </Typography>
                            <Typography>
                            {card.desc}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            
                            <Button size="small" className={classes.edit} className={classes.edit}>
                              Edit
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                      )
                  )
                :
                cards.map((card,index) => (
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <Card className={classes.card}> 
                      <CardContent className={classes.cardContent}>
                          <div className={classes.col}></div>
                          {card.date}
                        <Typography gutterBottom variant="h5" component="h2">
                        {card.topic}
                        </Typography>
                        <Typography>
                        {card.desc}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        
                        <Button size="small" className={classes.edit} >
                          Edit
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  ))
                
              }
              
            
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




