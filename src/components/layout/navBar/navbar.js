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
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AddIcon from '@mui/icons-material/Add';
import MoreIcon from '@mui/icons-material/MoreVert';
import MicIcon from '@mui/icons-material/Mic';
import YoutubeLogo from "../../../assets/images/logo/YoutubeLogo.png"
import "./css/style.css"
import TemporaryDrawer from '../drawer/drawer';
import ButtonBase from '@mui/material/ButtonBase';
import { useState } from "react";
import LoginPage from '../loginPage/login';




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
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  cursor:'pointer'
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

export default function PrimarySearchAppBar({searchVideo, setSearchVideo}) {
  const [searchQuery, setSearchQuery] = useState("");
  
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
        <ButtonBase 
          component="div" 
          onClick={() => console.log("Create clicked")}
          sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}
        >
          <Badge color="error">
            <AddIcon fontSize='small'/>
          </Badge>
        </ButtonBase>
        <Typography fontWeight={300}>
          Create
        </Typography>
      </Box>
    </MenuItem>

    <MenuItem>
      <ButtonBase 
        component="div"  
        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        onClick={() => console.log("Notifications clicked")}
      >
        <Badge color="error">
          <NotificationsNoneOutlinedIcon />
        </Badge>
        <p>Notifications</p>
      </ButtonBase>
    </MenuItem>

    <MenuItem onClick={handleProfileMenuOpen}>
      <ButtonBase 
        component="div"  
        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
      >
        <AccountCircle />
        <p>Profile</p>
      </ButtonBase>
    </MenuItem>
  </Menu>
);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    };

  {/*Const for the tab styling*/}
  const tabStyles = {
  minWidth: 'auto',
  px: 1.5,
  py: 0.5,
  fontWeight: 550,
  fontSize: '0.875rem',
  borderRadius: 2,
  marginRight: 1,
  bgcolor: '#f2f2f2',
  color: 'text.primary',
  textTransform: 'none',
  minHeight: '32px',
  '&.Mui-selected': {
    bgcolor: 'black',
    color: 'white',
  }
}





  return (
    <>
    <Box sx={{ flexGrow: 1,}}>
      <AppBar id="app-bar" position="static" 
      style={{backgroundColor:"white", 
      color:"black",}}>
        <Toolbar 
        sx={{display:'flex',
            alignItems:'center',
            justifyContent:"space-between"}}>


        {/*left side of the bar*/}
        <Box sx={{display:"flex", alignItems:"center", gap:0}}>
          <Box
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          <TemporaryDrawer sx={{width:"40px"}}/>
          </Box>
            <Box sx={{display:"flex",
              justifyContent:"center",
              alignItems:"center",
            }}>
              <Box
              component="img"
              src={YoutubeLogo}
              sx={{width:"150px"}}
              />
            </Box>
        </Box>

        {/*center of the navbar*/}
          <div className='searchBar-mic'>
  <Search
    style={{
      width: "700px",
      height: "35px",
      border: "1px solid #D3D3D3",
      WebkitBorderRadius: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}
  
    >
    <StyledInputBase
      placeholder="Search"
      inputProps={{ 'aria-label': 'search' }}
      sx={{
        flex: 1,
        paddingLeft: 2,
        '& input::placeholder': {
          fontWeight: '500',
          color:'#696767ff',
          opacity: 1
        }
      }}
      value={searchVideo}
    onChange={(e) =>setSearchVideo(e.target.value)
      
    }
    
    />
    <SearchIconWrapper 
     onClick={() => console.log(searchVideo)}
      sx={{
        backgroundColor: "#edebebff", 
        WebkitBorderTopRightRadius: "20px", 
        WebkitBorderBottomRightRadius: "20px", 
        display: "flex", 
        height: "100%"
      }}>
      <SearchIcon/>
    </SearchIconWrapper>
  </Search>
          
          <IconButton 
            sx={{backgroundColor:"#edebebff"}}>
              <MicIcon/>
            </IconButton>
          </div>

          {/*right side of the navbar*/}
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

  {/*Tabs*/}
    <Box sx={{ maxWidth: 'none', bgcolor: 'background.paper' }}>
  <Tabs
    value={value}
    onChange={handleChange}
    variant="scrollable"
    scrollButtons
    allowScrollButtonsMobile
    aria-label="scrollable force tabs example"
    indicatorColor='none' 
  >
    <Tab className='tab' label="All" sx={tabStyles}/>
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