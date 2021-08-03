import React from 'react';
import './TeamInfo.css';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
const TeamInfo = (props) => {
    const { idTeam, strTeamBadge, strTeam, strSport, strGender } = props.data;
    const history = useHistory();
    const clickHandle = (idTeam) => {
        const url = `/team/${idTeam}`;
        history.push(url);
    }
    return (
        <div className="MainData-Box">
            <div className="dataBox">
                <img src={strTeamBadge} style={{ width: "100px", height: "100px" }} alt="" />
                <h3>{strTeam}</h3>
                <h5>{strSport}</h5>
                <h5>{strGender}</h5>
                <Button variant="primary" onClick={() => clickHandle(idTeam)}>Explore</Button>
            </div>
        </div>
    );
};

export default TeamInfo;