import React, { useEffect, useState } from 'react'

import ContactList from './ContactList';
import Grid from '@mui/material/Grid';
import ContactDetails from './ContactDetails';
import CircularProgress from '@mui/material/CircularProgress';
const ContactApp = ({contacts}) => {
    const [contactIndex, setContactindex] = useState(0);
    
    const handlecontactidx = (idx) => {
        setContactindex(idx)
    }
    return (
        <>
            {/* {loading ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <CircularProgress />
                </div> : */}
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