import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from "react-router-dom";

import { useLocation } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputIcon from '@material-ui/icons/Input';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { toggleDrawer, userAuthentication, logout } from '../store/actions';


const Menu = [
    {title: 'Главная', url: '/', ico: 'ico'},
    {title: 'О сайте', url: '/about', ico: 'ico'},
];

const Dashboard = ({dashboard, unsplash, toggleDrawer, userAuthentication, logout}) => {
const location = useLocation();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar
          style={{display: 'flex'}}
        >
          <IconButton 
            edge="start" 
            color="inherit" 
            aria-label="menu"
            onClick={() => toggleDrawer()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
           
          </Typography>
          {
            unsplash.isAuthenticated ?
            <Tooltip title='Выйти'>
              <IconButton
                color="inherit"
                style={{marginLeft: 'auto'}}
                onClick={() => logout()}
              >
                <AccountCircle />
              </IconButton>
            </Tooltip>
            :
            <Tooltip title='Войти'>
              <IconButton
                color="inherit"
                style={{marginLeft: 'auto'}}
                component={Link}
                to={'/authorization'}
              >
                <InputIcon />
              </IconButton>
            </Tooltip>
          }
        </Toolbar>
      </AppBar>
      <Drawer
        onClick={() => toggleDrawer()}
        variant="persistent"
        anchor="left"
        open={dashboard.drawer}
      >
        <div
          style={{width: '250px'}}
        >
          <List>
            {Menu.map((item, index) => (
              <ListItem 
                exact
                button 
                key={item.title}
                component={NavLink}
                to={item.url}
                selected = {
                  location.pathname === item.url ? true : false
                }
              >
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>  
    </div>
  )
}


const mapStateToProps = state => ({
  dashboard: {
    drawer: state.drawer.open,
  },
  unsplash: state.unsplash
});

const mapDispatchToProps = {
  toggleDrawer,
  userAuthentication,
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Dashboard);