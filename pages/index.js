import HeroElement from "../components/HeroElement";
import SmoothiePreview from "../components/SmoothiePreview";
import ServeElement from "../components/ServeElement";
import FreshElement from "../components/FreshElement";
import SmoothiesServed from "../components/SmoothiesServed";
import NavBar1 from "../components/NavBar1";
import React from "react";
import CommunityElement from "../components/CommunityElement";
import NavBar from "../components/NavBar";
import NewsLetterForm from "../components/NewsLetterForm";
import Footer from "../components/Footer";

export default function Home() {

  const [formOpen, setFormOpen] = React.useState(false);

  return (
    <div>
      <NavBar setFormOpen={updateFormOpen}/>
      <HeroElement />
      <SmoothiePreview />
      <ServeElement />
      <FreshElement />
      <NavBar1 />
      <SmoothiesServed />
      <CommunityElement setFormOpen={updateFormOpen}/>
      {formOpen && <NewsLetterForm setFormOpen={updateFormOpen}/>}
      <Footer />
    </div>
  )

  function updateFormOpen() {
    setFormOpen(prevOpen => !prevOpen);
  }
  
}
