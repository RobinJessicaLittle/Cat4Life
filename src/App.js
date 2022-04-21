import { useEffect, useState } from 'react';
import './App.css';
import { faker } from '@faker-js/faker';


//Setting up hooks

function App() {
  const[cat, setCat] = useState([])
  const [error, setError] = useState(null);
//Function to Fetch Images 

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const response = await fetch (
          'https://api.thecatapi.com/v1/images/search?limit=20'
        );
        if (!response.ok) {
          throw new Error (response.statusText)
        }
        console.log (cat)
            const data = await response.json();
            setCat(data);
      } catch (error) {
        setError('!Could not fetch data!');
        console.log(error.message);
      }
    };
    fetchCat();
//Function to fetch faker data
    const fetchData = () => {
      const array = [];

      for (let i = 0; i < 10; i++) {
        const name = faker.name.findName();
        const price = faker.commerce.price(50, 1000);
        const breed = faker.animal.cat();

        array.push({name, price});
      }

      return array;
    };
//Function that ensure both images and faker data are returned together in the index
    useEffect(() => {
      (async () => {
        const pics = await fetchCat();
        let data = fetchData();
        data = data.map((cat, i) => {
          cat.pics =pics[i].url;
          cat.id = i;
          return cat;
        });
        setCats(data);
      }) ();
    }, []);


    return (
      <div className="App">
        {cat.map((cat, index) => (
          <div key={index}>
            {error && <p>{error}</p>}
            <img src={cat.url} alt="cat image"/>
            <h3> {cat.name}</h3>
            <h3> {cat.breed}</h3>
            <p>£{cat.price}</p>
            <button>Add Crate</button>
          </div>
        ))}
      </div>
    );
[];

 
export default App;