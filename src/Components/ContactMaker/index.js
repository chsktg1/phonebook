import { Component } from "react";

import { Star, StarFill } from "react-bootstrap-icons";

class ContactMaker extends Component {
  change = () => {
    const { changeMe, contact } = this.props;
    const { name } = contact;
    changeMe(name);
  };

  render() {
    const { contact } = this.props;
    const { name, num, isFav } = contact;
    return (
      <tr>
        <td>{name}</td>
        <td>{num}</td>
        <td onClick={this.change}>{isFav ? <StarFill /> : <Star />}</td>
      </tr>
    );
  }
}

export default ContactMaker;
