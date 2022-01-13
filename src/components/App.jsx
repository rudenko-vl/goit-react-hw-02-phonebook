import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import { Container } from "./App.styled";

class App extends Component {
  state = {
  contacts: [],
  name: ''
  }
  
  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm/>
      </Container>
  )
}

};

export default App;
