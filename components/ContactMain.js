import React from 'react'
import CommunityElement from './CommunityElement';
import styles from '../styles/ContactFile.module.css';
import ContactForm from './ContactForm';

export default function ContactMain(props) {
  return (
    <div>
      <CommunityElement setFormOpen={props.setFormOpen}/>
      <ContactForm />
    </div>
  )
}
