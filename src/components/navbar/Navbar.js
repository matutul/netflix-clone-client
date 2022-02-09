import { ArrowDropDown, Notifications, Search } from '@mui/icons-material';
import { useState } from 'react';
import './navbar.scss';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => window.onscroll = null;
    }
    console.log(isScrolled);
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    <img src="https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-1/c540.596.330.329a/s160x160/271319980_2491954937605131_3580366849640120260_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=O2U0xIQJwREAX83VZtA&_nc_ht=scontent.fdac8-1.fna&oh=00_AT8ymOkY8vh4re0u1Xf-64VqwbPKL-loOgOmFz6_gLUtmA&oe=61EED843" alt="" />
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;