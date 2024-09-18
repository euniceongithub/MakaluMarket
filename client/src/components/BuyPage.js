// src/components/BuyPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

const BuyPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/items')
      .then(response => setItems(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <main>
        <h2>Available Items</h2>
        <ul>
          {items.map(item => (
            <li key={item._id}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default BuyPage;
