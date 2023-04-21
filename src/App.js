
import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form'; import List from './List';

function App() {
  const [reqType, setReqType] = useState('users');
  const [data, setData] = useState([]);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = 'https://jsonplaceholder.typicode.com';

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const newUrl = `${API_URL}/${reqType}`;
        const response = await fetch(newUrl);
        if (!response.ok) throw Error("deu ruim")
        const json = await response.json()
        setData(json)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchItems()
  }, [reqType])


  return (
    <div className="App">
      <Form
        reqType={reqType}
        setReqType={setReqType}
      />
      <List
        data={data}
      />
    </div>
  );
}

export default App;
