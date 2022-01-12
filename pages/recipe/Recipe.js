import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



import './Recipe.css'

export default function Recipe() {
    const { id } = useParams();
    const url = 'http://localhost:3000/recipes/' + id
    const [recipe, setRecipe] = useState([])
    
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setRecipe(data))
        

    }, [])
   
    console.log(recipe)
    return (
        <div className="recipe-content">
            

            <h3>{recipe.title}</h3>
            <p>Cooking Time : {recipe.cookingTime}</p>
            <div>Ingredients : {recipe.ingredients}</div>
            <p>Method : {recipe.method}</p>

            
        </div>
    )
}
