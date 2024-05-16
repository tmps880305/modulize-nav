import React, {useEffect, useState} from 'react';

import logoImg from '../assets/logo.svg';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import useWindowSize from "./hooks/use-windowsize";

const LG_SCREEN_STRESHHOLD = 1200;

const Header = (props) => {
    const [scrollState, setScrollState] = useState('top');
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
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


    const onHamburgerClick = () => {
        setIsBurgerOpen(!isBurgerOpen);
    }


    return (<header className={classes.header} data-scroll={scrollState}>
        <div className={classes.headerContainer}>
            <div className={classes.logoContainer}>
                <NavLink className={classes.logo} to="">
                    <img src={logoSrc} alt="Company name."/>
                    <h4>Reactnav</h4>
                </NavLink>
            </div>

            <nav className={`${classes.navbar} ${isBurgerOpen && classes.open}`}>
                <div className={classes.hamburgerWrap} onClick={onHamburgerClick}>
                    <div className={classes.hamburgerMenu}>
                        <div className={`${classes.line} ${classes['line-1']}`}></div>
                        <div className={`${classes.line} ${classes['line-2']}`}></div>
                        <div className={`${classes.line} ${classes['line-3']}`}></div>
                    </div>
                </div>
                <div className={`${isBurgerOpen && classes['menu-bkg']}`} onClick={onHamburgerClick}></div>

                <ul className={width > LG_SCREEN_STRESHHOLD ? classes.navlist : classes.menu}>
                    {navLinks.map((nav, index) => (
                        <li key={index} className={`${classes.navlistli} ${classes.isHamb}`}>
                            <div className={width > LG_SCREEN_STRESHHOLD ? classes.dropWrap : ''}>
                                <NavLink className={classes.navlink}
                                         to={nav.label.dest}
                                         onClick={onHamburgerClick}
                                         state={nav.label.state}
                                >{nav.label.alt}
                                </NavLink>
                                {nav.subLabel.length > 0 &&
                                    <ul key={nav.label} className={classes.dropContent}>
                                        {nav.subLabel.map(sub =>
                                            (<li key={sub.main} className={classes.droplist}>
                                                    <NavLink className={classes.droplink} to={nav.label.dest}
                                                             state={sub.state}>{width > 1366 ? sub.main : sub.alt}</NavLink>
                                                </li>
                                            ))}
                                    </ul>}
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>

            {/*<nav className={classes.navbar}>*/}
            {/*    <ul className={classes.navlist}>*/}
            {/*        {navLinks.map(navLink => (*/}
            {/*                <li key={navLink.label.main} className={classes.navlistli}>*/}
            {/*                    <div className={classes.dropWrap}>*/}
            {/*                        <NavLink className={classes.navlink}*/}
            {/*                                 to={navLink.label.dest} state={navLink.label.state}*/}
            {/*                        > {width > 1366 ? navLink.label.main : navLink.label.alt} </NavLink>*/}
            {/*                        {navLink.subLabel.length > 0 &&*/}
            {/*                            <ul key={navLink.label} className={classes.dropContent}>*/}
            {/*                                {navLink.subLabel.map(sub =>*/}
            {/*                                    (<li key={sub.main} className={classes.droplist}>*/}
            {/*                                            <NavLink className={classes.droplink} to={navLink.label.dest}*/}
            {/*                                                     state={sub.state}>{width > 1366 ? sub.main : sub.alt}</NavLink>*/}
            {/*                                        </li>*/}
            {/*                                    ))}*/}
            {/*                            </ul>}*/}
            {/*                    </div>*/}
            {/*                </li>*/}
            {/*            )*/}
            {/*        )}*/}
            {/*    </ul>*/}
            {/*</nav>*/}
            {/*<div className={classes.burgerContainer}>*/}
            {/*    <Hamburger scrollState={scrollState} navLinks={navLinks}/>*/}
            {/*</div>*/}
        </div>
    </header>)
};

export default Header;
