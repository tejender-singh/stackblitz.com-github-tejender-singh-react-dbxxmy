import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import MoreIcon from '@material-ui/icons/MoreVert';
import SendIcon from '@material-ui/icons/Send';
import ExploreIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { Link, BrowserRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  link:{
    backgroundColor:'#fff',
    color:'#000',
  },
    appBar:{
        backgroundColor:'#fff',
        color:'#000',
        boxShadow:'0px 0.2px 0.4px -0.1px rgba(0, 0, 0, 0), 0px 0.4px 0.5px 0px rgba(0,0,0,0.14), 0px 1px 0.1px 0px rgba(0,0,0,0.12)'
    },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    marginLeft:theme.spacing(10),
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    textAlign: 'center',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor:'#fafafa',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(30),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fafafa',
    color:'#ccc',
    marginLeft:theme.spacing(7),
  },
  inputRoot: {
    color: 'inherit',
    borderStyle:'double',
    borderColor:'#ccc',
    borderWidth:'thin',
  },
  inputInput: {
    textAlign: 'center',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar(inputProps) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
      <div id="topRightMenu">
            <BrowserRouter>
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem  onClick={inputProps.logoutHandler} to="/" component={Link}>
        Logout
      </MenuItem>
    </Menu>
    </BrowserRouter>
    </div>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            MySocialMedia
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon style={{position:'center'}}/>
            </div>
            <InputBase
              placeholder="Search"              
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="home" color="inherit" to="/" component={Link}>
              <HomeIcon />
            </IconButton>
            <IconButton aria-label="messages" color="inherit" to="/messages" component={Link}>
              <SendIcon />
            </IconButton>
            <IconButton aria-label="explore" color="inherit" to="/explore" component={Link}>
              <ExploreIcon />
            </IconButton>
            <IconButton aria-label="favourite" color="inherit" to="/favourite" component={Link}>
              <FavoriteIcon />
            </IconButton>
            <IconButton
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
        </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}