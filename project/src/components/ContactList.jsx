import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

const ContactList = ({contacts, handlecontactidx,contactIndex }) => {
  return (
    <Box sx={{width:'65%'}}>
      <Grid>
        <List  sx={{backgroundColor:'#e9ecef',padding:'0px'}}>
          {contacts.map((element, idx) => {
            return (
              <ListItem onClick={()=>
                { 
                  handlecontactidx(idx)  
                }
              } 
              sx={{backgroundColor:contactIndex===idx?'#adb5bd':'',paddingBottom:'4px',paddingTop:'4px'}}
             
              key={element.id}
            
            >
              
                <ListItemAvatar>
                  <Avatar
                    sx={{ bgcolor: '#6c757d' }}
                    alt={element.name}
                    src="/broken-image.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={element.name}
                />
             
              </ListItem>
             
            )
          })
          }
        </List>

      </Grid>
    </Box>
  )
}

export default ContactList