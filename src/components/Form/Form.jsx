// import { Formik } from 'formik';
import { Component } from 'react';
import { FormBox } from './Form.styled';
// import { nanoid } from 'nanoid'

export class Form extends Component {
       state = {      
        name: '',
        number: '',
    };

    handleInputChange = event => {   
        this.setState({[event.currentTarget.name]: event.currentTarget.value })        
    }

    handleSubmit = event => {
        event.preventDefault();
        // console.log(this.state);
        this.props.onSubmit(this.state);
        this.reset();

    }

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    // addInputId = nanoid();

    render() {

        return (
            <FormBox onSubmit={this.handleSubmit}>
                <h3>Name</h3>
                <label>
                    <input                    
                        onChange={this.handleInputChange}
                        type="text"
                        value={this.state.name}
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <h3>Number</h3>
                <label>
                    <input                     
                        onChange={this.handleInputChange}
                        type="tel"
                        value={this.state.number}
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
}