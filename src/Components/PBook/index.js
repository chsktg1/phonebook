import { Component } from "react";

import ContactMaker from "../ContactMaker";

import "./index.css";

import { v4 } from "uuid";

var initialContacts = [
  { id: 1, name: "chsk", num: 123333, isFav: false },
  { id: 2, name: "chsk2", num: 1212121, isFav: true },
];

class PBook extends Component {
  state = { name: "", num: "", contacts: initialContacts };

  changeMe = (name) => {
    this.setState((p) => ({
      contacts: p.contacts.map((e) => {
        if (e.name === name) {
          return { ...e, isFav: !e.isFav };
        } else {
          return e;
        }
      }),
    }));
    // var { contacts } = this.state;
    // const details = contacts.filter((e) => e.name === name)[0];
    // details.isFav = details.isFav ? false : true;
    // contacts = contacts.filter((e) => e.name !== name);
    // contacts.push(details);
    // this.setState({ contacts });
    // console.log(details);
  };

  addContact = () => {
    const { name, num, contacts } = this.state;
    contacts.push({ id: v4(), name, num });
    this.setState({ name: "", num: "", contacts: contacts });
  };
  updateName = (event) => {
    this.setState({ name: event.target.value });
  };
  updateNum = (event) => {
    this.setState({ num: event.target.value });
  };

  render() {
    const { contacts, name, num } = this.state;
    console.log(contacts);
    return (
      <>
        <div className="input-holder">
          <div>
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              value={name}
              onChange={this.updateName}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="number">Number:</label>
            <input
              id="number"
              value={num}
              onChange={this.updateNum}
              type="number"
            />
          </div>
          <div>
            <button onClick={this.addContact}>Add Contact</button>
          </div>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Contact Number</th>
            </tr>
            {contacts.map((contact) => (
              <ContactMaker
                key={contact.id}
                contact={contact}
                changeMe={this.changeMe}
              />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default PBook;
