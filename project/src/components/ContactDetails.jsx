import { Avatar, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';
import ApartmentIcon from '@mui/icons-material/Apartment';

const ContactDetails = ({contact }) => {

  const { name, address, company, username, website, email, phone } = contact || {}
  const { street, city, zipcode } = address || {}
  useEffect(()=>{

  },[contact])
 
  return (
    <div>
      <Typography variant='h1'>
        <Avatar
          sx={{ bgcolor: '#6c757d', width: '100px', height: '100px', fontSize: '40px', marginTop: '3rem', marginLeft: '15rem' }}
          alt={name}
          src="/broken-image.jpg"
        />
      </Typography>

      <Grid container sx={{ marginTop: '4rem' }} >
        <Grid item xs={12} md={6} >
          <Typography variant='h5'>
            Basic Information
          </Typography>
          <List>

            <ListItem>
              <AccountCircleIcon sx={{ marginRight: '0.7rem' }} />
              <ListItemText primary={name} secondary={username} />
            </ListItem>
            <ListItem>
              <LocalPhoneIcon sx={{ marginRight: '0.7rem' }} />
              <ListItemText primary={phone} />
            </ListItem>
            <ListItem>
              <EmailIcon sx={{ marginRight: '0.7rem' }} />
              <ListItemText primary={email} />
            </ListItem>
            <ListItem>
              <BusinessIcon sx={{ marginRight: '0.7rem' }} />
              <ListItemText>{street}, {city},{zipcode}</ListItemText>

            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6} >
          <Typography variant='h5'>
            Company Information
          </Typography>
          <List>
            <ListItem>
              <ApartmentIcon sx={{ marginRight: '0.7rem' }} />
              <ListItemText>{company?.name},{company?.bs}</ListItemText>
            </ListItem>
            <ListItem>
              <LanguageIcon sx={{ marginRight: '0.7rem' }} />
              <ListItemText primary={website} />
            </ListItem>
          </List>
        </Grid >

      </Grid>

    </div>
  )
}

export default ContactDetails