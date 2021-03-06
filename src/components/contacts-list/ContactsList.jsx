import React from 'react'
import contacts from './../../data/contacts.json'
import AddRandom from '../add-random/AddRandom'
import Contact from '../contact/Contact'

class ContactsList extends React.Component {
    state = {
        contacts: contacts.slice(0, 5)
    }

    addRandomContact = (event) => {
        event.preventDefault();
        const randomContact = contacts[Math.floor(Math.random() * contacts.length) + 0];

        this.setState((prev) => {
            return {
                contacts: [randomContact, ...prev.contacts]
            }
        });
    }

    sortByNameHandler = () => {
        const orderedNameContacts = this.state.contacts.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    }

    sortByPopularityHandler = () => {
        const orderedPopularityContacts = this.state.contacts.sort((a, b) => {
            return parseFloat(b.popularity) - parseFloat(a.popularity);
        });

        this.setState((prev) => {
            return {
                contacts: orderedPopularityContacts
            }
        });
    }

    deleteContact = (id) => {
        this.setState((prev) => {
            return {
                contacts: prev.contacts.filter(i => i.id !== id)
            }
        })
    }

    render() {

        return(
            <div className="App">
                <h1 className="my-5 py-5">Iron Contacts</h1>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-4">
                            <form onSubmit={this.addRandomContact}>
                                <button className="btn btn-dark" type="submit"> Add Random Contact </button>
                            </form>
                        </div>

                        <div className="col-4">
                            <button className="btn btn-dark" onClick={this.sortByNameHandler}> Sort by Name </button>                         
                        </div>

                        <div className="col-4">
                            <button className="btn btn-dark" onClick={this.sortByPopularityHandler}> Sort by Popularity </button>                         
                        </div>
                    </div>

                    <table className="row my-5">
                        <thead className="d-flex justify-content-center">
                            <tr className="d-flex justify-content-between">
                                <th className="px-3"><h2>Picture</h2></th>
                                <th className="px-3"><h2>Name</h2></th>
                                <th className="px-3"><h2>Popularity</h2></th>
                                <th className="px-3"><h2>Delete</h2></th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.contacts.map((contact, i) => {
                                return <Contact contact={contact} deleteContact={this.deleteContact} />
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default ContactsList;