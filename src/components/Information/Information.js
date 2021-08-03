import React from 'react';
import './Information.css';
import facebook from '../../Icon/Facebook.png';
import YouTube from '../../Icon/YouTube.png';
import Twitter from '../../Icon/Twitter.png';
import image from '../../Team Logo/woman.jpg';
import image2 from '../../Team Logo/image2.jpg';
import imageBoy from '../../Team Logo/download (6).jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMars, faMapMarked} from '@fortawesome/free-solid-svg-icons';
const Information = (props) => {
    const { intFormedYear, strCountry, strTeam, strGender, strSport, strTeamBadge, strFacebook, strYoutube, strTwitter } = props.data;
    const { src } = props.Image;
    console.log(props.data);
    const too = "Male";
    let to;
    if (strGender === too) {
        to = image;
    }
    else {
        to = imageBoy;
    }
    console.log(to);
    return (
        <div className="Information-Main">
            <div className="logo-side"  style={{ backgroundImage: `url(${image2})` }}>
                <img src={strTeamBadge} alt="" />
            </div>
            <div className="Info-Total">
                <div className="Info-Some">
                    <div>
                        <h1>{strTeam}</h1>
                        <h4><FontAwesomeIcon icon={faMapMarked} /> Founded:{intFormedYear}</h4>
                        <h4><FontAwesomeIcon icon={faFlag} />   Country: {strCountry}</h4>
                        <h4><FontAwesomeIcon icon={faFutbol} />   Sport Type: {strSport}</h4>
                        <h4><FontAwesomeIcon icon={faMars} /> Gener: {strGender}</h4>
                    </div>
                    <div className="infoSome-img">
                        <img src={to} alt="" />
                    </div>
                </div>
                <br />
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A beatae quos repudiandae veritatis temporibus quasi id similique suscipit ut amet totam, nemo numquam sint consectetur quae dolores. Possimus dolorum dolores animi iure cumque porro amet fuga non molestiae aliquid quidem soluta dolor harum, vel tempore excepturi. Voluptate, at? Ab, optio?</p>
                <br />
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, culpa. Eos cumque ut iusto in, quibusdam eligendi, dolorum enim, fugit nam porro accusamus atque quidem assumenda error sapiente cupiditate? Reprehenderit.</p>
                <br />
                <br />
                <div className="image-style">
                    <div className="icon">
                        <a href="http://twitter.com"><img src={Twitter} alt="" /></a>
                    </div>
                    <div className="icon">
                        <a href="http://facebook.com"><img src={facebook} alt="" /></a>
                    </div>
                    <div className="icon">
                        <a href="http://youtube.com"><img src={YouTube} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;