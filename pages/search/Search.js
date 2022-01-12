import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import RecipeList from '../../components/RecipeList'

export default function Search() {
    const [recipes, setRecipes] = useState([])
    const queryString = useLocation().search;
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')
    

    const url = 'http://localhost:3000/recipes?q=' + query

    console.log(url)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    console.log(recipes)
    return (
        <div>
            <RecipeList recipes={recipes} />
        </div>
    )
}
