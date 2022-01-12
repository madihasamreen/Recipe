import React from 'react'
import { useEffect, useState } from 'react'
import RecipeList from '../../components/RecipeList'
export default function Home({ dataobj }) {

    console.log(dataobj);
    const [recipes, setRecipes] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))

    }, [])


   
    if (dataobj)
        dataobj["id"] = Math.floor(Math.random() * 100);
    // dataobj["id"] = "2000";
    console.log(dataobj)


    const handleRecipes = () => {
        
        if(dataobj)
            return [...recipes, dataobj]
        return recipes    

    }


    return (
        <div>
            <RecipeList recipes={handleRecipes()} />
        </div>
    )
}
