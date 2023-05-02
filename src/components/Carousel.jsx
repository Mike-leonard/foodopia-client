import React from 'react';

const Carousel = () => {
    return (
        <div className="carousel w-full h-96 rounded-md">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src="https://as1.ftcdn.net/v2/jpg/04/30/68/94/1000_F_430689447_zM1mZOwoAwSNUVTWNlzJ1uEmUjr6w0cl.jpg" className="w-full opacity-90" />
                <p className="absolute top-0 right-0 bottom-0 left-0 m-auto w-60 h-44 bg-gray-900 rounded-lg text-white text-4xl text-center leading-relaxed">
                    Our Passion <br /> For Delicious <br /> Food
                </p>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://as2.ftcdn.net/v2/jpg/04/49/17/93/1000_F_449179349_JhvKanNxyZlPBVlTd8NOVVOXePQkLJS9.jpg" className="w-full opacity-90" />
                <p className="absolute top-0 right-0 bottom-0 left-0 m-auto w-60 h-44 bg-gray-900 rounded-lg text-white text-4xl text-center leading-relaxed">
                    I love you like a fat kid loves cake.
                </p>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://as2.ftcdn.net/v2/jpg/03/20/84/09/1000_F_320840955_XEpyeFXszALVzjIF6R9zD6VypDmYKgQi.jpg" className="w-full opacity-90" />
                <p className="absolute top-0 right-0 bottom-0 left-0 m-auto w-60 h-44 bg-gray-900 rounded-lg text-white text-4xl text-center leading-relaxed">
                    What you eat, will tell you who you are.
                </p>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://as1.ftcdn.net/v2/jpg/04/20/83/22/1000_F_420832255_oojwsRv0JNgZEuNg4Dqs7mZTghPjL2G0.jpg" className="w-full opacity-90" />
                <p className="absolute top-0 right-0 bottom-0 left-0 m-auto w-60 h-44 bg-gray-900 rounded-lg text-white text-4xl text-center leading-relaxed">
                    Love of food is sincereable than love
                </p>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;