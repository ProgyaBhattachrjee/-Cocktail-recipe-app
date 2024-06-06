import React from 'react'
import  { useState, useEffect } from 'react';
import Cocktail from './Cocktail';
import { ToastContainer, toast } from 'react-toastify';
const Landing = () => {
  const [data, setData] = useState([]);
  const [d,sd] = useState(data);
  const [v,sv] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const jsonData = await response.json();
      setData(jsonData.drinks);
      sd(data);
    };
console.log(d);
    fetchData();
  }, []);
  const clk = ()=>{
  const nd = data.filter((d)=> d.strIngredient1 == v);
  if(nd.length == 0){
 toast.error("Not found")
  }
  else{
  console.log(nd);
 setData(nd)
  }
}
  return (
    <div  style={{display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center"}}>
<div style={{display: "flex",gap:"20px"}}>
<input type="text" value={v} onChange={(e)=> sv(e.target.value)} style={{height: "30px",borderRadius: "20px",border: "2px solid #059669"}} />
    <button onClick={clk} className='btn' style={{borderRadius: "20px"}}>Search</button>
</div>
       {data.length > 0 && (
        <div style={{display:"grid",gridTemplateColumns: "1fr 1fr 1fr",gap: "20px"}}>
          {data.map((drink) => (
            
            <Cocktail key={drink.idDrink} drink={drink}/>
          ))}
        </div>
      )}
      <ToastContainer/>
    </div>
  )
}

export default Landing

  