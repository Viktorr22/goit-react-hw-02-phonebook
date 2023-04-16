// import PropTypes from 'prop-types';

export function ContactList ({contacts, onDeleteContact}) {
    return (       
            <ul>
                {contacts.map(({ id, name, number }) => (
                    <li key={id}>
                        {name}: {number}
                        <button onClick = {() => onDeleteContact(id)}>Delete</button>
                    </li>
                  )            
                )}
            </ul>      
    );
}