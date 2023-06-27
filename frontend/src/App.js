import LoginPage from './Components/LoginPage';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch('/api').then(
      response => response.json()
      ).then(
        data => {
          setBackendData(data)
        }
    )
  }, []);

  return (
    <div className="App">
      <LoginPage />
      {/* <p>{backendData}</p> */}
    </div>
  );
}

export default App;
