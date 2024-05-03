import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'; //4.2k (gzipped: 1.8k)

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://207.211.188.228:3000/users", {
      'mode': 'cors',
      'headers': {
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then((response) => response.json())
      .then((data) => setData(data));

  }, []);
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >

          <h1>Informacionde los usuarios</h1>
          <div className='card'>
            <ul>
              {data?.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          </div>
        </a>


      </header>
    </div>
  );
}

export default App;
