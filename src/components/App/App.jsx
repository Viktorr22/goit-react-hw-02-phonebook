import { Component } from 'react';
import { Form, Section,  ContactList} from 'components';


export class App extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
     
    };

    formSubmitHandler = data => {
        console.log(data);
        this.setState({ contacts: [data] })
        console.log(this.state.contacts);
    }   


    render() {
        return (
            <Section title={'Phonebook'}>            
                <Form onSubmit={this.formSubmitHandler} />
                <ContactList contacts={ this.state.contacts} />
            </Section>      
        )
    }
   
}; 
