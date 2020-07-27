import React from 'react';
import Product from '../product';
import Orders from '../orders'
import Categories from '../category';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import '../../App.css';
import Logo from '../partial/logo';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {useSelector, useDispatch } from 'react-redux';
import oidcUserManager from "../../service/authService";
import PrivateRoute from '../../routes/privateRoute';
import { useEffect } from 'react';

import {getUser} from "../../actions/user/userAction";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
   // flexGrow: 2,
  },
  preserve: {
    flexGrow: 5,
  },
  logo : {
    flexGrow: 2,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor:"white",
    color:"black"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),

    backgroundColor:"white",
    color:"black"
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    marginTop: "50px"
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    marginTop: "50px"
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = async() => {
    await oidcUserManager.logout();
  }
  const {user} = useSelector(state => { return {user: state.user.data}});
  const dispatch = useDispatch();

  useEffect(() =>{
      dispatch(getUser());
  }, [dispatch]);
  return (

    <div className={classes.root}>
      <Router>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.menuButton} >
              {/* <img src={Logo}></img>  */}
            </div>
            <div className ={classes.preserve}>
            </div>
            
            {(
            <div>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                    >{(
                      user?
                      <Typography>Welcome {user.profile.name}</Typography> 
                      : <Typography>loading </Typography>
                    )}
                       
                    <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={openMenu}
                        onClose={handleClose}>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
            </div>
            )}
        </Toolbar>
      </AppBar>
      
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />

          <List>
            <Link to="/dashboard">
              <ListItem button>
                  <ListItemIcon><InboxIcon /></ListItemIcon>
                  <ListItemText primary="Orders Dashboard" />
              </ListItem>
            </Link>
            <Link to="/products">
              <ListItem button>
                  <ListItemIcon><InboxIcon /></ListItemIcon>
                  <ListItemText primary="Products" />
              </ListItem>
            </Link>
            <Link to="/categories">
              <ListItem button>
                  <ListItemIcon><InboxIcon /></ListItemIcon>
                  <ListItemText primary="Categories" />
              </ListItem>
            </Link>
          </List>

      </Drawer>
      <div className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Switch>
          <PrivateRoute exact path="/" component={Orders} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/products" component={Product} />
          <Route exact path="/dashboard" component={Orders} />
        </Switch>
        
      </div>
      </Router>
    </div>
  );
}
