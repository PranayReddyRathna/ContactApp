import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';


const Header = ({search,setSearch}) => {

  return (
    <div >
      
      <AppBar position="static">
        <Box sx={{ flexGrow: 1 }} bgcolor='#001219'>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              ContactApp
            </Typography>
           
            <SearchIcon />
            <input size="20" color='grey' type="search" placeholder="Search…" value={search}
               onChange={(e) => setSearch(e.target.value)}/>
            
          </Toolbar>
        </Box>
      </AppBar>

    </div>
  )
}

export default Header