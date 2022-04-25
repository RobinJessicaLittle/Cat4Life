
import { useEffect, useState } from "react";
import "./App.css";
import { faker } from "@faker-js/faker";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const [cat, setCat] = useState([]);
  const [error, setError] = useState(null);
  const [basket, setBasket] = useState([]);

  //Function to fetch faker data
  const fetchData = () => {
    const array = [];
    for (let i = 0; i < 21; i++) {
      const name = faker.name.findName();
      const price = faker.commerce.price(50, 150);

      array.push({ name, price });
    }
    return array;
  };
  //Function to fetch cat api images and tie the faker data together
  useEffect(() => {
    const fetchCat = async () => {
      try {
        let cats = fetchData();
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=21"
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        cats = cats.map((cat, i) => {
          cat.pics = data[i].url;
          cat.id = i;
          return cat;
        });
        setCat(cats);
      } catch (error) {
        setError("!Could not fetch data!");
        console.log(error.message);
      }
    };
    fetchCat();
  }, []);

  //add cat to basket
  const addToBasket = (item) => {
    setBasket([...basket, item]);
  };
  // remove cat from basket
  const removeItemFromBasket = (item) => {
    const remainingBasketItems = basket.filter((cat) => cat.id !== item.id);
    setBasket(remainingBasketItems);
  };

  return (
    <div id="main">
      <Navbar basket={basket} removeItemFromBasket={removeItemFromBasket} />
      <div className="App">
        {cat.map((item, index) => (
          <div id="card" key={index}>
            {error && <p>{error}</p>}
            <img src={item.pics} alt="cat" />
            <h3> {item.name}</h3>
            <p>£{item.price}</p>

            <button
              id="addBtn"
              onClick={() => {
                addToBasket(item);
              }}
            >
              {" "}
              add to basket{" "}
            </button>
          </div>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;