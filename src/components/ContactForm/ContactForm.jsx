import { Component } from "react"
import s from "./ContactForm.module.css"

export default class ContactForm extends Component {

 state = {
  name: '',
  number: '',
}

  handleChanheValue = e => {
     const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  
  handleSubmit = (e) => {
      e.preventDefault();
      const { name, number } = this.state;
      this.props.onSubmit(name, number)
      

  }

  render() {
    const { name, number } = this.state;
      return ( 
          <form onSubmit={this.handleSubmit} className={s.formContainer}>
              <label className={s.label}>   Name
                  <input type="text" name="name" value={name} onChange={this.handleChanheValue} required className={s.inputField}/> </label>
            <label className={s.label}>  Number
          <input type="tel" name="number" value={number} onChange={this.handleChanheValue} required className={s.inputField}/>
              </label>
              
              <button type="submit" onClick={this.handleAddUser} className={s.submitButton}>Add contact</button>
        </form>
  );}
  
};