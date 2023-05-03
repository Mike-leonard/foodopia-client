import React, { useEffect, useState } from 'react';
import SingleCardTeam from './SingleCardTeam';

const OurTeam = () => {

    const [chefList, setChefList] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/chef')
        .then(res => res.json())
            .then(data => setChefList(data))
    },[])
    return (
        <div className="m-1">
            {/* TODO: Need to use iamgge here */}
            <h4 className="text-4xl text-center">Our Team</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 my-4 justify-center">
                {
                    chefList.map(chef => <SingleCardTeam chef={chef} key={chef.id}></SingleCardTeam>)
                }
            
            </div>
        </div>
    );
};

export default OurTeam;