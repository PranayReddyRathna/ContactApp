import React, { useState } from 'react'

import ContactList from './ContactList';
import Grid from '@mui/material/Grid';
import ContactDetails from './ContactDetails';
const ContactApp = ({contacts}) => {
    const [contactIndex, setContactindex] = useState(0);
  
    const handlecontactidx = (idx) => {
        console.log(idx);
        setContactindex(idx)
    }
    return (
        <>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} >
                        <ContactList  contacts={contacts} handlecontactidx={handlecontactidx} contactIndex={contactIndex} />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <ContactDetails  contact={contacts?.[contactIndex]} />
                    </Grid>
                </Grid>
        </>
    )
}

export default ContactApp