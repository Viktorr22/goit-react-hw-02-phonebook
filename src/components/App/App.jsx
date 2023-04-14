import { Component } from 'react';
import { Form, Section } from 'components';
import { nanoid } from 'nanoid'

export class App extends Component {
    state = {
        contacts: [],
        name: '',
        number: '',
    };

    handleInputChange = event => {
        // console.log(event.currentTarget); 
        // console.log(event.currentTarget.name); 
        // console.log(event.currentTarget.value);       
        this.setState({[event.currentTarget.name]: event.currentTarget.value })        
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        this.reset();

    }

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    addInputId = nanoid();



    render() {
        return (
            <Section title={'Phonebook'}>            
                <Form
                    contactname={this.state.name}
                    number={this.state.number}
                    onchange={this.handleInputChange}
                    onsubmit={this.handleSubmit}
                    generateId={this.addInputId}
                />
            </Section>      
        )
    }
   
}; 
