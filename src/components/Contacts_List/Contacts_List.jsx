import ContactItem from 'components/Contact_Item/Contact_Item';
const ContactsList = ({ contacts, onRemove }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onRemove={() => onRemove(id)}
        />
      ))}
    </ul>
  );
};
export default ContactsList;
