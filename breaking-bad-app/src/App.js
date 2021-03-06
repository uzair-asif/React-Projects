import React , {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'

import Header from './Components/UI/Header'
import CharacterGrid from './Components/Characters/CharacterGrid'

import Search from './Components/UI/Search'

function App() {

  const [items , setItems] = useState([])
  const [isLoading , setIsLoading] = useState(true)
  const [query, setQuery] = useState('')


  useEffect(() =>{
    const fetchData = async () =>{
      const result = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)


      console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    }

    fetchData();
  }, [query])


  return (
    <div className="App">
      <Header />
      <Search getQuery={ (q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items = {items}/>
    </div>
  );
}

export default App;
