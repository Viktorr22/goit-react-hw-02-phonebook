// import { Formik } from 'formik';
import { FormBox } from './Form.styled';

export function Form({ contactname, number, onchange, onsubmit, generateId }) {

    return (     
               <FormBox onSubmit = {onsubmit}>
                  <h3>Name</h3>
                  <label htmlFor={generateId}>                    
                      <input
                         id={generateId}
                         onChange={onchange}
                         type="text"
                         value={contactname}
                         name="name"
                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                         required                    
                      />
                   </label>
                   <h3>Number</h3>
                   <label htmlFor={generateId}>
                      <input
                         id={generateId}
                         onChange={onchange}
                         type="tel"
                         value={number}
                         name="number"
                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                         required
                      />
                   </label>
                   <button type='submit'>Add contact</button>    
               </FormBox> 
               
    
       
    )
}