import React from 'react'
import ContactHero from '../../components/ContactHero'
import ContactMain from '../../components/ContactMain';
import NavBar from '../../components/NavBar';
import NewsLetterForm from '../../components/NewsLetterForm';
import Footer from '../../components/Footer';

export default function Contact() {
    const [formOpen, setFormOpen] = React.useState(false);


  return (
    <div>
        <NavBar setFormOpen={updateFormOpen}/>
        <ContactHero />
        <ContactMain setFormOpen={updateFormOpen} />
        {formOpen && <NewsLetterForm setFormOpen={updateFormOpen}/>}
        <Footer />
    </div>
  )

  
  function updateFormOpen() {
    setFormOpen(prevOpen => !prevOpen);
  }
  
}
