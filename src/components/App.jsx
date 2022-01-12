import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";

class App extends Component {
  state = {
  contacts: [],
  name: ''
  }
  
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm/>
      </>
  )
}

};

export default App;
