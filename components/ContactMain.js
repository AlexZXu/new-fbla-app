import React from 'react'
import CommunityElement from './CommunityElement';
import styles from '../styles/ContactFile.module.css';

export default function ContactMain(props) {
  return (
    <div>
        <CommunityElement setFormOpen={props.setFormOpen}/>
    </div>
  )
}
