import { useEffect, useState } from 'react';
import OurList from './components/OurList';

function App() {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json()) 
      .then(data => {
        setInfo(data);
        setLoading(false);
      })
    return () => {}; // clean up
  });

  return (
    <div className='App'>
      {loading && <div>Loading...</div>}
      {info && (
        <OurList
          user={info}
         
        />
      )}
    </div>
  );
}

export default App;
