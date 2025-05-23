import React from 'react'
import Link from 'next/link';

const recipes = async () => {
    const data = await fetch('https://dummyjson.com/recipes');
    const {recipes} = await data.json();
    console.log(recipes);
  return (
    <>
     <h1 className='text-center text-4xl font-bold pt-5 text-blue-950'>All Recipes</h1>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center items-center gap-5 p-10'>
        
        {recipes.map((recipe)=>(
            
         <Link key={recipe.id} href={`/recipes/${recipe.id}`}> <div  className='flex flex-col bg-blue-200 p-8 rounded-xl '> 
            <span><span  className='text-lg font-medium'>Recipe Name :</span> {recipe.name}</span>
            <span><span className='text-lg font-medium'>Cuisine type : </span>{recipe.cuisine}</span>
            <span><span className='text-lg font-medium'>Difficulty level : </span>{recipe.difficulty}</span>
            <span><span className='text-lg font-medium'>Prep time + Cook time : </span>{recipe.prepTimeMinutes + recipe.cookTimeMinutes}</span>
            <span><span className='text-lg font-medium'>Rating : </span>{recipe.rating}</span>
          </div> </Link>
        ))}
    </div>
    </>
  )
}

export default recipes