import { number } from 'prop-types';
import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Contacts from '../Contacts/Contacts';
import PhonebookInput from './PhoneBookInput/PhonebookInput';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';



class Phonebook extends Component {

    state = {
        contacts: [],
        name: '',
        number: ''
      }
    // onClg = ()=>{}
    onChangeInpuntName = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
        
    }

    onSubmitContacts = (e) => {
        e.preventDefault();
        const {contacts, name, number} = this.state
        this.setState({contacts: [...contacts, {name: name, number: number, id: uuidv4()}], name: "", number: ""});
    }

render() {
    const {name, number, contacts} = this.state
    return (
        <>
        <PhonebookInput 
            name={name} 
            number={number} 
            onChangeInpuntName={this.onChangeInpuntName} 
            onSubmitContacts={this.onSubmitContacts}/>
        <Contacts contacts={contacts}/>
        </>
    );
}
}




export default Phonebook;

// const propTypes = {};