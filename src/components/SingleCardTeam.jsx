import React from 'react';

const SingleCardTeam = ({ chef }) => {

    const { id, name, chefPhoto, likes, numberOfRecipes, yearOfExperiences } = chef
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure className="w-40"><img src={chefPhoto} alt="Movie" className='w-full max-w-md rounded-lg' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="text-sm">Year of Experiences: <span className="text-red-700">{yearOfExperiences}</span></p>
                <p className="text-sm">Number of Recipes: <span className="text-red-700">{numberOfRecipes}</span> </p>
                <p className="text-sm flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" width="24px" height="24px">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.28 2 12.36 2 8.93 2 6.67 3.61 5 5.67 5c1.34 0 2.58.81 3.33 2.04C10.73 6.81 11.97 6 13.31 6c2.06 0 3.67 1.67 3.67 3.93 0 3.43-3.4 6.35-8.55 11.1L12 21.35z" />
                    </svg>
                    {likes}
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary text-xs">View Recipes</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCardTeam;