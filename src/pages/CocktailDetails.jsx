import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CocktailDetails = () => {
  const { idDrink } = useParams();
  const [drinkDetails, setDrinkDetails] = useState(null);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
      .then(response => response.json())
      .then(data => setDrinkDetails(data.drinks[0]))
      .catch(error => console.error('Error fetching cocktail details:', error));
  }, [idDrink]);

  if (!drinkDetails) {
    return  <div className="loading-container">
    <div className="spinner"></div>
    <p>Loading...</p>
  </div>;
  }

  return (
<div className="cocktail-details" style={{display: "flex",gap: "10px"}}>
    <div>
    <img
        src={drinkDetails.strDrinkThumb}
        alt={drinkDetails.strDrink}
        style={{
          width: '300px',
          height: '350px',
          objectFit: 'cover',
          borderRadius: '5px',
        }}
      />
    </div>
   <div style={{display: "flex",flexDirection: "column",gap: "50px"}}>
<div  style={{display: "flex",gap: "30px"}}>
<label htmlFor="" style={{backgroundColor: " #059669",padding: "10px",fontWeight: "bold"}}>Name</label>
   <p >{drinkDetails.strDrink}</p>
</div>
<div style={{display: "flex",gap: "30px"}}>
<label htmlFor="" style={{backgroundColor: " #059669",padding: "10px",fontWeight: "bold"}}>Type</label>
      <p style={{ fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
        {drinkDetails.strAlcoholic}
      </p>
</div>
 <div style={{display: "flex",gap: "30px"}}>
    <label htmlFor="" style={{backgroundColor: " #059669",padding: "10px",fontWeight: "bold"}}>Glass</label>
    <p style={{ fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
        {drinkDetails.strGlass}
      </p>
 </div>
   <div style={{display: "flex",gap: "30px"}}>
   <label htmlFor="" style={{backgroundColor: " #059669",padding: "10px",fontWeight: "bold"}}>Instruction</label>
   <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
        {drinkDetails.strInstructions}
      </p>
   </div>
   </div>
      {/* Add more details as needed */}
    </div>
  );
};

export default CocktailDetails;
