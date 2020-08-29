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
import './myStyle.css';

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

const cards = [1];

export default function SimpleModal() {

const classes = useStyles();

  return (
   <div>
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
  </div>
  );
}
