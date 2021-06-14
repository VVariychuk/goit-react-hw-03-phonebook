import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';

import ContactsListItm from './ContactsListItm'

export default function ContactsList({ contacts, onDeleteContact }) {
    return (
        <>
            {contacts.length ?
                <ul className={styles.contactsList}>
            {contacts.map(({ id, name, number }) => (
                <ContactsListItm
                    key={id}
                    name={name}
                    number={number}
                    onClickHendler={()=>onDeleteContact(id)}
                />             
            ))
            }
                </ul> :
                <p>No contacts added</p>
        }
      </>  
    )
};

ContactsList.propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
}