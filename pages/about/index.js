import React from 'react'
import AboutHero from '../../components/AboutHero';
import WhatWeDo from '../../components/WhatWeDo';
import InfoElement from '../../components/InfoElement';
import FreshDrinkElement from '../../components/FreshDrinkElement';
import NewsLetterForm from '../../components/NewsLetterForm';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import MakeIt from "../../components/MakeIt";

export default function About () {
    const [formOpen, setFormOpen] = React.useState(false);

    return (
        <div>
            <NavBar setFormOpen={updateFormOpen}/>
            <AboutHero />
            <WhatWeDo />
            <InfoElement />
            <MakeIt />
            <FreshDrinkElement />
            {formOpen && <NewsLetterForm setFormOpen={updateFormOpen}/>}
            <Footer />
        </div>
    )

    
  function updateFormOpen() {
    setFormOpen(prevOpen => !prevOpen);
  }
}