import React, { Component } from "react";
import {Form, Label, BtnSubmit} from "./ContactForm.styled"

class ContactForm extends Component {
    state = {
    name: '',
    number: '',
    };
    
    render() {
        return (
            <Form>
          <Label>Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example               Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required/>
          </Label>
          <Label>Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and             can start with +"
              required/>
          </Label>
          <BtnSubmit type="submit">Add contact</BtnSubmit>
        </Form>
        )
    }
};

export default ContactForm;