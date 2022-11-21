import React from 'react'
import CommunityElement from './CommunityElement';
import styles from '../styles/ContactFile.module.css';
import ContactForm from './ContactForm';
import ContactEmail from './ContactEmail';

export default function ContactMain(props) {
  return (
    <>
      <CommunityElement setFormOpen={props.setFormOpen}/>
      <ContactForm />
    </>
  )
}
