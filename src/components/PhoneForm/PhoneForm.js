import { Formik, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { ButtonContact, Form } from './PhoneFormStyled';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoneNumber } from '../../redux/ContactSlice/contactSlice';
import { Notify } from 'notiflix';

const PhoneSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.number()
    .min(6, 'To Short!')
    .positive('Required')
    .required('Required'),
});

export const PhoneForm = () => {
  const dispatch = useDispatch();
  const contactsSelector = useSelector(state => state.contacts.contacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          contactsSelector.find(
            contact =>
              contact.name === values.name || contact.number === values.number
          )
            ? Notify.failure(values.name + 'is already in contact')
            : dispatch(
                addPhoneNumber({
                  id: nanoid(),
                  ...values,
                })
              );

          actions.resetForm();
        }}
        validationSchema={PhoneSchema}
      >
        <Form>
          <label>Name</label>
          <Field
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" />

          <label>Number</label>
          <Field
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" />

          <ButtonContact type="submit">Add contact</ButtonContact>
        </Form>
      </Formik>
    </div>
  );
};
