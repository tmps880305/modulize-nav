import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../Header";

const RootLayout = () => {
    const NAV_DATA = [
        {
            label: {
                main: "Our Brands", alt: "Brands", dest: "", state: {scrollTo: 'section0'}
            },
            subLabel: [],
        }, {
            label: {
                main: "About us", alt: "About us", dest: "about", state: {scrollTo: 'section0'}
            },
            subLabel: [{
                main: "Who we are", alt: "Who we are", state: {scrollTo: 'section1'}
            }, {
                main: "Locations", alt: "Locations", state: {scrollTo: 'section2'}
            }, {
                main: "Traffic", alt: "Traffic", state: {scrollTo: 'section3'}
            }]
        }, {
            label: {
                main: "Recruit", alt: "Recruit", dest: "recruit", state: {scrollTo: 'section0'}
            },
            subLabel: []
        }, {
            label: {
                main: "News", alt: "News", dest: "news", state: {scrollTo: 'section0'}
            }, subLabel: [{
                main: "Main Location", alt: "Crystalline form", state: {scrollTo: 'section1'}
            }, {
                main: "West Location", alt: "Highest purity / quality", state: {scrollTo: 'section2'}
            }, {
                main: "Oversea Location", alt: "Efficiency Process", state: {scrollTo: 'section3'}
            }]
        }, {
            label: {
                main: "Franchise", alt: "Franchise", dest: "franchise", state: {scrollTo: 'section0'}
            },
            subLabel: []
        }, {
            label: {main: "Contact", alt: "Contact", dest: "contact", state: {scrollTo: 'section0'}}, subLabel: []
        }

    ]

    return <>
        <Header navLinks={NAV_DATA}/>
        <main>
            <Outlet/>
        </main>
    </>
};
export default RootLayout;
