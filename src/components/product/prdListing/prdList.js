import React, { useEffect, useState } from "react";

const PrdList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          console.log("Network issue");
        }
        const fetchedData = await response.json();
        setItems(fetchedData);
      } catch (error) {
        console.log("Error");
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <ul className="row">
        {items.map((item) => (
          <li key={item.id} className="col-md-3 p-1">
            <img src={item.image} alt="product" width="100%" height="60%"/>
            <p className="float-center p-3">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrdList;
