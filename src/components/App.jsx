import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import { Container } from "./App.styled";
import { GlobalStyle } from "./GlobalStyle";

class App extends Component {
  state = {
  contacts: [],
  name: ''
  }
  
  render() {
    return (
      <Container>
        <GlobalStyle/>
        <h1>Phonebook</h1>
        <ContactForm/>
      </Container>
  )
}
};

export default App;
