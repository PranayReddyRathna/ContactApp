import React, { useEffect, useState, useRef, useCallback } from 'react';
import ContactApp from './components/ContactApp';
import Header from './components/Header';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const debounce = (fn, delay) => {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

function App() {
  const [search, setSearch] = useState('');
  const [contacts, setContacts] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await axios('https://jsonplaceholder.typicode.com/users');
      setLoading(false);
      setContacts(response.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const contactlist = useCallback(
    async (val) => {
      try {
        setLoading(true);
        const response = await axios('https://jsonplaceholder.typicode.com/users');
        const data = response.data;
        setLoading(false);
        if (val) {
          const filteredContacts = data.filter((element) =>
            element.name.toLowerCase().includes(val.toLowerCase())
          );
          setContacts(filteredContacts);
          setNotFound(filteredContacts.length === 0);
        } else {
          setContacts(data);
          setNotFound(false);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    },
    []
  );
  const handleSearch = (val) => {
    contactlist(val); 
  }
  const debouncedSearch = useRef(debounce(handleSearch, 500)).current;

  useEffect(() => {
    if (search) {
      debouncedSearch(search);
    } else {
      contactlist('');
    }
  }, [search,contactlist,debouncedSearch]);

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </div>
      ) : (
        <div>
          {notFound ?
           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Alert severity="info" sx={{maxWidth:'500px'}}>No contacts found.</Alert></div> 
            : <ContactApp  contacts={contacts} />}
        </div>
      )}
    </>
  );
}

export default App;
