import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Information from '../Information/Information';

const TeamDetails = () => {
    const {id} = useParams();
    const [team, setTeam] = useState([]);
    useEffect(()=>{
            const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
            console.log(url);
            fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams))
    },[id])
    console.log(team);
    const to = <img src="../../Team Logo/image 23.png" alt="" />
    return (
        <div>
            {
                team.map(team => <Information data={team} Image={to}></Information>)
            }
        </div>
    );
};

export default TeamDetails;