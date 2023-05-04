import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';

const RecipeDetails = ({ chef }) => {
    // console.log(chef)

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch(`https://foodopia-server.vercel.app/recipe/${chef.id}`)
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    return (
        <div className="overflow-x-auto py-6 mx-1">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Recipe Name</th>
                        <th>Ingredients</th>
                        <th>Cooking Method</th>
                        <th>Rating</th>
                        <th>Add to Favorites</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        recipes.map(recipe => <TableRow recipe={recipe} key={recipe.id}></TableRow>)
                    }
                    {/* 
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                    </tr>

                    <tr>
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                    </tr>

                    <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
};

export default RecipeDetails;