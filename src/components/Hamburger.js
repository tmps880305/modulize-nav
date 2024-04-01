import React, {useEffect, useState} from 'react';

import classes from './Hamburger.module.css'
import {NavLink} from "react-router-dom";

const Hamburger = (props) => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const navLinks = props.navLinks;

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.pageYOffset);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsBurgerOpen(false);
    }, [scrollY]);

    const onHamburgerClick = () => {
        setIsBurgerOpen(!isBurgerOpen);
    }

    const onHamburgerNavClick = () => {
        setIsBurgerOpen(false);
    }

    return (
        <nav className={`${classes['hamburger-nav']} ${isBurgerOpen && classes.open}`}>
            <div className={classes['hamburger-wrap']} onClick={onHamburgerClick}>
                <div className={classes['hamburger-menu']}>
                    <div className={`${classes.line} ${classes['line-1']}`}></div>
                    <div className={`${classes.line} ${classes['line-2']}`}></div>
                    <div className={`${classes.line} ${classes['line-3']}`}></div>
                </div>
            </div>
            <div className={`${isBurgerOpen && classes['menu-bkg']}`} onClick={onHamburgerClick}></div>

            <ul className={classes['menu']}>
                {navLinks.map((nav, index) => (
                    <li key={index}>
                        <NavLink className={classes.navlink}
                                 to={nav.label.dest}
                                 onClick={onHamburgerNavClick}
                                 state={nav.label.state}
                        >{nav.label.alt}
                        </NavLink></li>
                ))}
            </ul>
        </nav>
    )
};

export default Hamburger;
