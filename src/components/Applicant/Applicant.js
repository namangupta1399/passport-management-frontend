import React from 'react';
import BossContainer from '../BossContainer';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import HelpIcon from '@material-ui/icons/Help';
import Footer from '../FooterNew';

const drawerWidth = 240;


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
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
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
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const iconArrayProfile = [<AccountCircleIcon/>, <CreateNewFolderIcon/>, <FolderSharedIcon/>];
const iconArrayApp = [<FileCopyIcon />,<EditIcon/> ,<DeleteIcon />]

export default function Applicant() {
  const classes = useStyles();

  return (
    
    <BossContainer>

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Applicant Dashboard
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              This is the applicant dashboard to navigate through applicant operations. 
            </Typography>

            <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['My profile', 'Apply for new passport', 'Apply for renewal'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{iconArrayProfile[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['View my application', 'Edit my application', 'Delete my application'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{iconArrayApp[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['View my helpdesk queries'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <HelpIcon/>
                </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>


            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
              <Grid item>
                  <Button variant="contained" color="primary">
                    View user profile
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="secondary">
                    Edit user profile
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={8}>
              <Grid item xs={6} >
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Apply for new passport.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                     Create new 
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item  xs={6} >

                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Apply for renewal of old passport.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" >
                      Renew passport
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={6} >
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      User Passport Application.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                    <Button size="small" color="primary">
                      Delete
                    </Button>
                    <Button size="small" color="primary">
                      View application status
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={6} >
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      FAQs
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      New query
                    </Button>
                    <Button size="small" color="primary">
                      View query
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

          </Grid>

        </Container>
      </main>
      {/* Footer */}
      
      <footer className={classes.footer}>
      <Footer />
        <Typography variant="h6" align="center" gutterBottom>
          Developer Contact
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Site maintained by Capgemini
        </Typography>
        <Copyright />
        
      </footer>
      {/* End footer */}
      </BossContainer>
  );
}
