import React from 'react'
import Image from 'next/image';

const recipeDetails = async ({params}) => {
    // console.log(params.recipeID);
    const data = await fetch(`https://dummyjson.com/recipes/${params.recipeID}`);
    const SpecificRecipe = await data.json();
    
  return (
    <>
        <div className='flex justify-center items-center pt-5 '>
        
          <div key={SpecificRecipe.id}  className='flex flex-col gap-2 bg-blue-200 p-8 rounded-xl '> 
            <Image src={SpecificRecipe.image} alt={SpecificRecipe.name} width={400} height={400} className='rounded-xl pb-2 m-auto' ></Image> 
            <span><span  className='text-lg font-medium' >Recipe Name : </span>{SpecificRecipe.name} </span>
            <span className='w-150'><span className='text-lg font-medium overflow-auto'>Ingredients list : </span>{SpecificRecipe.ingredients}</span>
            <span className='w-150'><span  className='text-lg font-medium'>Instructions : </span>{SpecificRecipe.instructions}</span>
            <span ><span className='text-lg font-medium'>Prep time : </span>{SpecificRecipe.prepTimeMinutes}</span>
                        <span ><span className='text-lg font-medium'>Cook time : </span>{SpecificRecipe.cookTimeMinutes}</span>
                                    <span ><span className='text-lg font-medium'>Servings: </span>{SpecificRecipe.servings}</span>
            <span ><span className='text-lg font-medium'>Tags : </span>{SpecificRecipe.tags}</span>
          </div> 
        
    </div>
    </>
  )
}

export default recipeDetails