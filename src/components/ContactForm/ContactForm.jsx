import { useState } from "react"
import s from "./ContactForm.module.css"

export const ContactForm = ({onSubmit}) => {
  //  state = {
//   name: '',
//   number: '',
  // }
  
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

//  const handleChanheValue = e => {
//      const { name, value } = e.target;
//     this.setState({ [name]: value });
  //   }
  
  const handleChanheValue = e => {
    const { name, value } = e.target;
     if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
};
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, number);
  };


      return ( 
          <form onSubmit={handleSubmit} className={s.formContainer}>
              <label className={s.label}>   Name
                  <input type="text" name="name" value={name} onChange={handleChanheValue} required className={s.inputField}/> </label>
            <label className={s.label}>  Number
          <input type="tel" name="number" value={number} onChange={handleChanheValue} required className={s.inputField}/>
              </label>
              
              <button type="submit" className={s.submitButton}>Add contact</button>
        </form>
  );
}



// export default class ContactForm extends Component {

//  state = {
//   name: '',
//   number: '',
// }

//   handleChanheValue = e => {
//      const { name, value } = e.target;
//     this.setState({ [name]: value });
//   }
  
//   handleSubmit = (e) => {
//       e.preventDefault();
//       const { name, number } = this.state;
//       this.props.onSubmit(name, number)
      

//   }

//   render() {
//     const { name, number } = this.state;
//       return ( 
//           <form onSubmit={this.handleSubmit} className={s.formContainer}>
//               <label className={s.label}>   Name
//                   <input type="text" name="name" value={name} onChange={this.handleChanheValue} required className={s.inputField}/> </label>
//             <label className={s.label}>  Number
//           <input type="tel" name="number" value={number} onChange={this.handleChanheValue} required className={s.inputField}/>
//               </label>
              
//               <button type="submit" onClick={this.handleAddUser} className={s.submitButton}>Add contact</button>
//         </form>
//   );}
  
// };