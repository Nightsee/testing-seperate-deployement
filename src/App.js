import axios from "axios";
import './App.css';
import {useState ,useEffect} from 'react';

const App = () =>{
  const [data, setdata] = useState('');
  useEffect( 
    ()=>{
      axios.get('https://testing-seperate-deployement.herokuapp.com/').then((res) => {
        setdata(res.data);
      })
    }
    ,[])

  return(
    <div>
      <h1>frontend working</h1> 
      <h3>the data recieved from the backend is: {data}</h3> 
    </div>
  )
}

export default App;
