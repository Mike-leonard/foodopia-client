import React, { useEffect, useState } from 'react';
import SingleCardTeam from './SingleCardTeam';
import menuImg from '../assets/temers.png'

const OurTeam = () => {

    const [chefList, setChefList] = useState([])
    useEffect(() => {
        fetch('https://foodopia-server.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefList(data))
    }, [])
    return (
        <div className="m-1">
            <div className="flex justify-center my-5">
                <img src={menuImg} className="w-20 -mb-5" alt="" />
            </div>
            <h4 className="text-4xl text-center">Our Team</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 mb-4 justify-center">
                {
                    chefList.map(chef => <SingleCardTeam chef={chef} key={chef.id}></SingleCardTeam>)
                }

            </div>
        </div>
    );
};

export default OurTeam;