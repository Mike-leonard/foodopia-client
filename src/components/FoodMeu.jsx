import React from 'react';
import menuImg from '../assets/food-knife.png'
const FoodMeu = () => {
    return (
        <div className="my-5">
            <div  className="flex justify-center">
                <img src={menuImg} className="w-20 -mb-5" alt="" />
            </div>
            <h4 className='text-4xl text-center mb-5'>Our Menu</h4>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="card w-96 glass">
                    <figure  className="h-64"><img className="w-96" src="https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Pizza</h2>
                        <p>Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure className="h-64"><img src="https://cdn.loveandlemons.com/wp-content/uploads/2019/07/salad.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Salad</h2>
                        <p>The five basic types of salad are green salads (tossed or composed), bound, vegetable, fruit, and combination. The five basic salads that can be served throughout the course of a meal are starter, accompaniment, main course, intermezzo, and dessert.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure  className="h-64"><img src="https://cookingchew.com/wp-content/uploads/2022/01/Fancy-Desserts_1-min.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Desserts</h2>
                        <p>Cheesecake, cupcakes, jell-O, carrot cake, apple pie, ice cream, brownies, chocolate chip cookies and chocolate cake are the most popular desserts in Italy.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodMeu;