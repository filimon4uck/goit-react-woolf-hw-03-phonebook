import { Component } from 'react';
import style from './Contact_Form.module.css';

const INIT_STATE = { name: '', number: '' };
class ContactForm extends Component {
  state = INIT_STATE;
  onChangeHandler = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState(INIT_STATE);
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form className={style.contact_form} onSubmit={this.handleSubmit}>
          <div className={style.form_field}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.onChangeHandler}
              value={name}
            />
          </div>
          <div className={style.form_field}>
            <label htmlFor="number">Number</label>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{(1, 4)}?[ .\-\s]?\(?\d{(1, 3)}?\)?[ .\-\s]?\d{(1, 4)}[
          .\-\s]?\d{(1, 4)}[ .\-\s]?\d{(1, 9)}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.onChangeHandler}
              value={number}
            />
          </div>
          <button className='form_button' type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
export default ContactForm;
