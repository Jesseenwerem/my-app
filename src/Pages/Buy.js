import React, { useState } from 'react'

import Navigation from '../Navigation/Nav'
import Products from '../Products/Products'
import Recommended from '../Recommended/Recommended'
import Sidebar from '../Sidebar/Sidebar';
// import Header from '../Components/Header';

// Database
import products from "../db/data"
import Card from '../Elements/Card';



function Buy() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");


  //-------------input Filter--------------
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
    -1
  );

  //-------------Radio Filter--------------
  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }

  //-------------Buttons Filter--------------
  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products


    //Filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    //Selected Filter

    if (selected) {
      filteredProducts = filteredProducts.filter(({ category, color, company,
        newPrice, title }) =>
      (category === selected ||
        color === selected ||
        company === selected ||
        newPrice == selected ||
        title === selected)
      );
    }

    return filteredProducts.map(({ Img, title, star, reviews, newPrice, prevPrice, }) => (
      <Card

        key={Math.random()}
        Img={Img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}


      />
    )
    );

  }

  const result = filteredData(products, selectedCategory, query)


  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default Buy