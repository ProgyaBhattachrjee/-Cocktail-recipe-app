import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import Error from './Error';
const Cocktail = ({drink}) => {

  const {strDrink,strAlcoholic,strGlass,strDrinkThumb,idDrink } = drink;

  return (
    <div className='cocktail-card'>
      <img src={strDrinkThumb} alt="" />
      <h3>{strDrink}</h3>
      <p>{strGlass}</p>
      <p>{strAlcoholic}</p>
      <Link to={`/cocktail/${idDrink}`} className='btn'>Details</Link>
    </div>
  )
}

export default Cocktail
