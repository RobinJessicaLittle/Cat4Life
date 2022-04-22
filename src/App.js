import { useEffect, useState } from 'react';
import './App.css';
import { faker } from '@faker-js/faker';
import Navbar from './components/NavBar';
import Footer from "./components/Footer";


function App() {
  const[cat, setCat] = useState([])
  const [error, setError] = useState(null);
  const [basket, setBasket] = useState([]);

	//add cat to basket
	const addToBasket = (item) => {
		setBasket([...basket, item]);
	};
	


//Function to Fetch Images 

useEffect(() => {
    fetchCat();
}, []);

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
        return data;
  } catch (error) {
    setError('!Could not fetch data!');
    console.log(error.message);
  }
};


//Function to fetch faker data
    const fetchData = () => {
      const array = [];
      for (let i = 0; i < 10; i++) {
        const name = faker.name.findName();
        const price = faker.commerce.price(50, 150)

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
        setCat(data);
      }) ();
    }, []);


    return (
      <div>
        <Navbar basket = {basket}
            />
        <div className="App">
          {cat.map((item, index) => (
            <div key={index}>
              {error && <p>{error}</p>}
              <img src={item.pics} alt="cat picture"/>
              <h3> {item.name}</h3>
              <p>£{item.price}</p>
              <button onClick={() => {addToBasket(cat)}}> add to basket </button>
              
            </div>
            ))}
        </div>
        <div>
          <Footer
          />
        </div>
      </div>
      );
}

 
export default App;

