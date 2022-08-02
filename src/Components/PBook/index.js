import { Component } from "react";

import ContactMaker from "../ContactMaker";

var initialContacts = [
  { name: "chsk", num: 123333, isFav: false },
  { name: "chsk2", num: 1212121, isFav: true },
];

class PBook extends Component {
  state = { name: "", num: "", contacts: initialContacts };

  changeMe = (name) => {
    var { contacts } = this.state;
    const details = contacts.filter((e) => e.name === name)[0];
    details.isFav = details.isFav ? false : true;
    contacts = contacts.filter((e) => e.name !== name);
    contacts.push(details);
    this.setState({ contacts });
    // console.log(details);
  };

  addContact = () => {
    const { name, num, contacts } = this.state;
    contacts.push({ name, num });
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
    return (
      <>
        <div className="input-holder">
          <input value={name} onChange={this.updateName} type="text" />
          <input value={num} onChange={this.updateNum} type="number" />
          <button onClick={this.addContact}>Add Contact</button>
        </div>
        <table>
          <tbody>
            {contacts.map((contact) => (
              <ContactMaker contact={contact} changeMe={this.changeMe} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default PBook;
