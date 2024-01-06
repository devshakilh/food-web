// YourComponent.js
import { useEffect } from 'react';
import { useDataContext } from './DataContext';

const YourComponent = () => {
  const { state, setData } = useDataContext();

  useEffect(() => {
    // Fetch data from the API
    fetch('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [setData]);

  return (
    <div>
      <h1>Your Component</h1>
      {/* Render your data here */}
      <ul>
        {state.items.map((item) => (
          <li key={item.Id}>{item.Name}</li>
          // Adjust the key and properties based on your API response structure
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
