import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { toast } from 'react-toastify';

const TableRow = ({ recipe }) => {

    console.log(recipe)
    const { id, recipeName, rating, cookingMethod, ingredients } = recipe

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    /* TODO: show a toast */
    const handleFavrtClick = (id, event) => {
        setIsButtonDisabled(true)
        toast.success('Recipe Added to Your Favorites')
    }

    return (
        <tr>
            <td>{recipeName}</td>
            <td>
                {ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
            </td>
            <td>
                {cookingMethod.map((method, index) => <li key={index}>{method}</li>)}
            </td>
            <td>
                {<Rating
                    style={{ maxWidth: 150 }}
                    value={Math.round(rating || 0)} readOnly />}
                <span className='ms-2'> {rating}</span>
            </td>
            <td>
                <button onClick={(event) => handleFavrtClick(id, event)} disabled={isButtonDisabled} className="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.28 2 12.36 2 8.93 2 6.67 3.61 5 5.67 5c1.34 0 2.58.81 3.33 2.04C10.73 6.81 11.97 6 13.31 6c2.06 0 3.67 1.67 3.67 3.93 0 3.43-3.4 6.35-8.55 11.1L12 21.35z" />
                    </svg>
                </button>
            </td>
        </tr>
    );
};

export default TableRow;