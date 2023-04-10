import React, { useState } from 'react';
import './css/Profile.css';
import { getRandomColor } from '../colorRandomizer';

const Profile = () => {
    // Import the images using import.meta.globEager
    const images = import.meta.globEager('./res/photos/profile/compressed/*.jpg');

    // Get the image URLs
    const profileImg1 = images['./res/photos/profile/compressed/profile.jpg'].default;
    const profileImg2 = images['./res/photos/profile/compressed/profile2.jpg'].default;
    const [hover, setHover] = useState(false);

    const color = getRandomColor();
    

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    const profileImgStyle = {
        backgroundImage: `url(${hover ? profileImg2 : profileImg1})`,
        backgroundSize: '25vw auto',
        height: '30vw',
        width: '25vw',
        cursor: 'pointer',
    };
    return (
        <div className="profile-container">
        <div className="profile">
            <div
                className="profileimg"
                style={profileImgStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            ></div>
            <div className="profiletext">
                <p className="profilehead" style={{color: color}}>I create fun things to make the world more colorful.</p>
                <br />
                Hi! I'm Alexandria, a designer and illustrator based in San Antonio, Texas. I graduated with a BFA in Graphic Design from California College of the Arts.
                <br />
                <br />
                I strongly believe that it is possible to be both childish and professional, and more than anything I admire the instinctive way in which children freely cut, paste, doodle, and create. In my spare time I enjoy watching weird old movies and listening to <a href="https://www.youtube.com/watch?v=QjHqMC4RXxg">crazy Japanese music</a>.
                <br />
                <br />
                Feel free to say hello or send cat pictures to:<br />
                <a href="mailto:helloalexandriadesign@gmail.com">helloalexandriadesign@gmail.com</a>
                <br />
                <br />
                <p className="resumehead">
                    <a href="https://drive.google.com/file/d/1kV4GGPepHiA93ZqrIhyneNYLjsnAkBq8/view?usp=sharing">Resume</a>
                </p>
                <p className="resumehead">
                    <a href="http://instagram.com/alexandria.design/">Instagram</a>
                </p>
            </div>
        </div>
        </div>
    );
};

export default Profile;
