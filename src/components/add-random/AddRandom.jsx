import React from 'react'
import contacts from '../../data/contacts.json'

class AddRandom extends React.Component {
    addRandomContact() {
        const randomContact = contacts[Math.floor(Math.random() * contacts.length) + 0];
        return randomContact;
    }

    render() {
        return(
            <form onSubmit={this.addRandomContact}>
                <button className="btn btn-dark" conClick={() => this.addRandomContact() }> Add Random Contact</button>
            </form>
        );
    }
}

export default AddRandom;