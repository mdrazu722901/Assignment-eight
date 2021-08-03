import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TeamInfo from '../TeamInfo/TeamInfo';
import backgroundImage from '../../Team Logo/bryce-evans-76LxMoNfwY8-unsplash.jpg';
import './Home.css';
const Home = () => {
    const [team, setTeam] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams))
    }, []);
    return (
        <div id="main">

            <div style={{ backgroundImage: `url(${backgroundImage})`, width: "auto", height: "100%", backgroundRepeat: "no-repeat" }} className="banner">
                <h1>Team Tracker</h1>
            </div>
            <div className="Home">
                {
                    team.map(Tdata => <TeamInfo data={Tdata}></TeamInfo>)
                }
            </div>
        </div>
    );
};

export default Home;