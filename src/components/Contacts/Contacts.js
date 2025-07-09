import { useDispatch, useSelector } from 'react-redux';
import { Filter } from 'components/filter/Filter';
import { removeContact } from '../../redux/ContactSlice/contactSlice';
import {
  LiStyle,
  UlStyle,
  UlStyleContactList,
  ButtonDel,
  MdDelete,
} from './ContactsStyled';

export const Contacts = () => {
  const InitialContacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const filteredContacts = InitialContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Contacts</h1>
      <UlStyle>
        <Filter />
        <UlStyleContactList>
          {filteredContacts.map(({ id, name, number }) => (
            <LiStyle key={id}>
              {name}: {number}
              <ButtonDel>
                <MdDelete onClick={() => dispatch(removeContact(id))} />
              </ButtonDel>
            </LiStyle>
          ))}
        </UlStyleContactList>
      </UlStyle>
    </div>
  );
};
