import React, {useEffect, useState} from 'react';

import logoImg from '../assets/logo.svg';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import Button from "./Button";
import Hamburger from "./Hamburger";
import useWindowSize from "./hooks/use-windowsize";

const Header = (props) => {
    const [scrollState, setScrollState] = useState('top');
    const [logoSrc, setLogoSrc] = useState(logoImg);
    const {width} = useWindowSize();
    const navLinks = props.navLinks;

    useEffect(() => {

        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const thresholdInPixels = 0.05 * scrollHeight;
            const thresholdInPixels_btm = 0.9 * scrollHeight;
            const currentScrollPos = window.pageYOffset;

            if (currentScrollPos > thresholdInPixels) {
                if (currentScrollPos < thresholdInPixels_btm) {
                    setScrollState('scrolled');
                } else {
                    setScrollState('bottom');
                }

                if (width > 1366) {
                    setLogoSrc(logoImg);
                }

            } else {
                setScrollState('top');
                setLogoSrc(logoImg);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [width]);


    return (<header className={classes.header} data-scroll={scrollState}>
        <div className={classes.headerContainer}>
            <div className={classes.logoContainer}>
                <NavLink className={classes.logo} to="">
                    <img src={logoSrc} alt="Company name: Chirogate."/>
                </NavLink>
            </div>

            <nav className={classes.navbar}>
                <ul className={classes.navlist}>
                    {navLinks.map(navLink => (
                            <li key={navLink.label.main} className={classes.navlistli}>
                                <div className={classes.dropWrap}>
                                    <NavLink className={classes.navlink}
                                             to={navLink.label.dest} state={navLink.label.state}
                                    > {
                                        navLink.label.main !== "Contact" ? (width > 1366 ? navLink.label.main : navLink.label.alt) :
                                            (<Button className={classes.navBut}>{navLink.label.main}</Button>)
                                    } </NavLink>
                                    {navLink.subLabel.length > 0 &&
                                        <ul key={navLink.label} className={classes.dropContent}>
                                            {navLink.subLabel.map(sub =>
                                                (<li key={sub.main} className={classes.droplist}>
                                                        <NavLink className={classes.droplink} to={navLink.label.dest}
                                                                 state={sub.state}>{width > 1366 ? sub.main : sub.alt}</NavLink>
                                                    </li>
                                                ))}
                                        </ul>}
                                </div>
                            </li>
                        )
                    )}
                </ul>
            </nav>
            <div className={classes.burgerContainer}>
                <Hamburger scrollState={scrollState} navLinks={navLinks}/>
            </div>
        </div>
    </header>)
};

export default Header;
