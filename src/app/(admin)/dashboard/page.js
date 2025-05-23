import React from 'react'

const dashboard = async() => {
    const data = await fetch('https://dummyjson.com/recipes');
    const {total ,recipes} = await data.json();
    const averageRating = recipes.reduce((sum, r) => sum + r.rating, 0) / recipes.length;
  return (
  <div>
   <div  className='flex flex-col bg-blue-200 p-8 rounded-xl '> 
            <span><span  className='text-lg font-medium'>Total Recipes :</span> {total}</span>
            <span><span className='text-lg font-medium'>Average Rating : </span> {averageRating.toFixed(2)}</span>
          </div> 
  </div>

  )
}

export default dashboard