import ContactApp from './components/ContactApp';
import Header from './components/Header';
import axios from 'axios'
import { useEffect,useState,useRef } from 'react';
const debounce = (fn, delay) => {
  let timeoutid;
  return function (...args) {
    if (timeoutid) {
      clearTimeout(timeoutid)
    }

    timeoutid = setTimeout(() => fn(...args), delay);
  };
};
function App() {
  const [search, setSearch] = useState('');
  const [searchvalue,setSearchvalue]=useState('');
  const searchRef = useRef();
  const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const contactlist = async (val) => {
        try {
            setLoading(true);
            const response = await axios('https://jsonplaceholder.typicode.com/users');
            const data=response.data;
            console.log(data);
            console.log('++++++',val)
            
            if(val){
              
              console.log('......')
               const arr=data.filter((element)=>{
                return element.name.toLowerCase().includes(val);
                
            })
                console.log(arr);
                setContacts(arr);
            }
            else if(val?.length()===0){
              console.log(data);
              setContacts(response.data);
            }
            else{
            setContacts(response.data);
            }
            setLoading(false);
        }
        catch (error) {
            setLoading(true);
            console.log(error);
        }
    }
  //   useEffect(() => {
      
  //     contactlist();
  // }, []);
  const handleSearch = (val) => {
    console.log('*****',val);
    setSearchvalue(val);
    contactlist(val); 
  }
  const debounced = useRef(debounce(handleSearch,500)).current;

  useEffect(() => {
    contactlist();
    console.log(search);
    // searchRef.current.focus();
    if (search)
      debounced(search);

  }, [search])
  return (
      <>
      
      
      <Header search={search} setSearch={setSearch} />
      <ContactApp contacts={contacts}/>
      </>
  );
}

export default App;
