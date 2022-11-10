import React from 'react'
import MenuHero from '../../components/MenuHero';
import MenuMain from '../../components/MenuMain';
import NavBar from "../../components/NavBar";
import NewsLetterForm from '../../components/NewsLetterForm';
import Footer from '../../components/Footer';

export default function Menu () {

    const [formOpen, setFormOpen] = React.useState(false);

    return (
        <div>
            <NavBar setFormOpen={updateFormOpen}/>
            <MenuHero />
            <MenuMain />
            {formOpen && <NewsLetterForm setFormOpen={updateFormOpen}/>}
            <Footer />
        </div>
    )

    
  function updateFormOpen() {
    setFormOpen(prevOpen => !prevOpen);
  }
  
}
