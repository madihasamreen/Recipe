import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './RecipeList.css'
export default function RecipeList({ recipes }) {


    return (
        <div className="recipe-list">

            {recipes.map(recipe => (
                <div key={recipe.id} className="card">
                    <h4>{recipe.title}</h4>
                    <p>{recipe.cookingTime} to make</p>
                    <div>{recipe.method.substring(0, 100)}...</div>
                    <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                </div>
            ))}
        </div>
    )
}
