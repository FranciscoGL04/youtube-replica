import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AddIcon from '@mui/icons-material/Add';
import MoreIcon from '@mui/icons-material/MoreVert';
import MicIcon from '@mui/icons-material/Mic';
import YoutubeLogo from "../../../assets/images/logo/YoutubeLogo.png"
import "./css/style.css"


const Search = styled('div')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  display:"flex",
  alignItems:"center",
  marginRight: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
      <Box display="flex" alignItems="center" gap={1}>
        <IconButton 
        size="small" 
        aria-label="Create" 
        color="inherit"
        sx={{p: 0.5}}>
          <Badge color="error">
            <AddIcon fontSize='small'/>
          </Badge>
        </IconButton>
        <Typography fontWeight={300}>
        <p>Create</p>
        </Typography>
      </Box>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="notifications"
          color="inherit"
        >
          <Badge color="error">
            <NotificationsNoneOutlinedIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    const tabStyles = {
      minWidth:'auto',
      px:2.5,
      py:1,
      fontWeight:'bold',
      borderRadius:50,
      marginRight:1,
      bgcolor:'#edebebff',
      color:'text.primary',
      '&.Mui-selected':{
        bgcolor:'black',
        color:'white',
      }
    }


  return (
    <>
    <Box sx={{ flexGrow: 1,}}>
      <AppBar id="app-bar" position="static" 
      style={{backgroundColor:"white", 
      color:"black",}}>
        <Toolbar 
        sx={{display:'flex', justifyContent:"space-between"}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Toolbar>
            <Box sx={{display:"flex",
              justifyContent:"center",
              alignItems:"center",
              width:"50%"
            }}>
              <Box
              component="img"
              src={YoutubeLogo}
              sx={{width:"150px"}}
              />
            </Box>
          </Toolbar>
          <Search
          style={{width:"500px",
            height:"40px",
          border:"1px solid #D3D3D3",
          WebkitBorderRadius:"20px",
          display:"flex",
          justifyContent:"space-between"}}>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIconWrapper sx={{backgroundColor:"#edebebff", WebkitBorderTopRightRadius:"20px", WebkitBorderBottomRightRadius:"20px", display:"flex", height:"100%"}}>
            <SearchIcon/>
            </SearchIconWrapper>
          </Search>
          <IconButton 
            sx={{backgroundColor:"#edebebff"}}>
              <MicIcon/>
            </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
            size="large" 
            aria-label="create" 
            color="inherit"
            sx={{display:"flex", alignItems:"center", gap:0.5, backgroundColor:"#edebebff", WebkitBorderRadius:"35px", padding:"0 0 1 1"}}>
              <Badge  color="error">
                <AddIcon />
              </Badge>
              <Typography fontSize="small" fontWeight="bold">
                Create
              </Typography>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge color="error">
                <NotificationsNoneOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>

    <Box sx={{ maxWidth:'none', bgcolor: 'background.paper'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        indicatorColor='none'
      >
        <Tab className='tab' label="All"  sx={tabStyles}/>
        <Tab className='tab' label="Music" sx={tabStyles}/>
        <Tab className='tab' label="Mixes" sx={tabStyles}/>
        <Tab className='tab' label="Gaming" sx={tabStyles}/>
        <Tab className='tab' label="Skills" sx={tabStyles}/>
        <Tab className='tab' label="Podcasts" sx={tabStyles}/>
        <Tab className='tab' label="Study Skills" sx={tabStyles}/>
        <Tab className='tab' label="Computer programming" sx={tabStyles}/>
        <Tab className='tab' label="Playlists" sx={tabStyles}/>
        <Tab className='tab' label="Live" sx={tabStyles}/>
        <Tab className='tab' label="Thoughts" sx={tabStyles}/>
        <Tab className='tab' label="Blues Music" sx={tabStyles}/>
        <Tab className='tab' label="Blues Music" sx={tabStyles}/>
        <Tab className='tab' label="Editing" sx={tabStyles}/>
        <Tab className='tab' label="Deep House" sx={tabStyles}/>
        <Tab className='tab' label="Sports tournaments" sx={tabStyles}/>
        <Tab className='tab' label="Bodybuilding" sx={tabStyles}/>
        <Tab className='tab' label="Watched" sx={tabStyles}/>
        <Tab className='tab' label="New to you" sx={tabStyles}/>
      </Tabs>
    </Box>
   
    </>
  );
}