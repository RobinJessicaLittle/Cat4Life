import { useEffect, useState } from 'react';
import './App.css';
import { faker } from '@faker-js/faker';



function App() {
  const[cat, setCat] = useState([])
  const [error, setError] = useState(null);

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
        // console.log(error.message);
      }
    };
    fetchCat();
  }, []);

  
  return (
		<div className="App">
			{cat.map((cat, index) => (
				<div key={index}>
					{error && <p>{error}</p>}
					<img src={cat.url} alt="cat image"/>
				</div>
			))}
		</div>
	);
}

export default App;