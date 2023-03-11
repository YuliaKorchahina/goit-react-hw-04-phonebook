import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ol>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name} : {number}{' '}
          <button type="button" onClick={() => onDelete(id)}>
            ❌
          </button>
        </li>
      ))}
    </ol>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
