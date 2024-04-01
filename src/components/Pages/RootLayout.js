import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const RootLayout = () => {
    const NAV_DATA = [
        {
            label: {
                main: "Home", alt: "Home", dest: "", state: {scrollTo: 'section0'}
            },
            subLabel: [],
        }, {
            label: {
                main: "About us", alt: "About us", dest: "about", state: {scrollTo: 'section0'}
            },
            subLabel: [{
                main: "About us", alt: "About us", state: {scrollTo: 'section1'}
            }, {
                main: "GMP Compliant History", alt: "History", state: {scrollTo: 'section2'}
            }, {
                main: "Facilities", alt: "Facilities", state: {scrollTo: 'section3'}
            }]
        }, {
            label: {
                main: "Prostaglandins API’s", alt: "Prost API", dest: "prostagAPI", state: {scrollTo: 'section0'}
            },
            subLabel: [{
                main: "Anti-Glaucoma", alt: "Anti-Glaucoma", state: {scrollTo: 'section1'}
            }, {
                main: "Pulmonary Arterial Hypertension", alt: "PAH", state: {scrollTo: 'section2'}
            }, {
                main: "Other Indications", alt: "Other Indications", state: {scrollTo: 'section3'}
            }, {
                main: "Veterinary Use", alt: "Veterinary Use", state: {scrollTo: 'section4'}
            }]
        }, {
            label: {
                main: "Prostaglandins API CDMO Services",
                alt: "CDMO Services",
                dest: "prostagCDMO",
                state: {scrollTo: 'section0'}
            }, subLabel: [{
                main: "Crystalline form", alt: "Crystalline form", state: {scrollTo: 'section1'}
            }, {
                main: "Highest purity & quality", alt: "Highest purity / quality", state: {scrollTo: 'section2'}
            }, {
                main: "Efficiency Process", alt: "Efficiency Process", state: {scrollTo: 'section3'}
            }, {
                main: "Supply of Impurity & related substance",
                alt: "SoI & related substance",
                state: {scrollTo: 'section4'}
            }]
        }, {
            label: {
                main: "Special Intermediates Prostaglandins analogs",
                alt: "Special Analogs",
                dest: "specialProstag",
                state: {scrollTo: 'section0'}
            }, subLabel: [{
                main: "CP-1 for E2/F2 series Prostaglandin analogs",
                alt: "CP-1 - E2/F2 series",
                state: {scrollTo: 'section1'}
            }, {
                main: "CP-2 for Benzindene Prostaglandin (Treprostinil)",
                alt: "CP-2 - Benzindene",
                state: {scrollTo: 'section2'}
            }, {
                main: "CP-3 for Benzoprostacyclin (Beraprost)",
                alt: "CP-3 - Benzoprostacyclin",
                state: {scrollTo: 'section3'}
            }, {
                main: "CP-4 for Carbaprostacyclin (Iloprost)",
                alt: "CP-4 - Carbaprostacyclin",
                state: {scrollTo: 'section4'}
            }, {
                main: "Intermediate for Isomer Free Latanoprost/Latanoprostene Bunod",
                alt: "Isomer Free Lat Bunod",
                state: {scrollTo: 'section5'}
            }, {
                main: "Intermediate for Isomer Free Travoprost",
                alt: "Isomer Free Travoprost",
                state: {scrollTo: 'section6'}
            }]

        }, {
            label: {main: "Contact", alt: "Contact", dest: "contact", state: {scrollTo: 'section0'}}, subLabel: []
        }

    ]

    return <>
        <Header navLinks={NAV_DATA}/>
        <main>
            <Outlet/>
        </main>
        <Footer navLinks={NAV_DATA}/>
    </>
};
export default RootLayout;
