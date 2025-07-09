import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/ContactSlice/contactSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  return (
    <div>
      <label>Filter</label>
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(filterContact(e.target.value))}
      />
    </div>
  );
};
