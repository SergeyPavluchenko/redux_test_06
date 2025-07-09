import { GlobalStyled } from './GlobalStyled';
import { Layout } from './Layout/Layout';

import { PhoneForm } from './PhoneForm/PhoneForm';
import { Contacts } from './Contacts/Contacts';
import { PageStyle } from './PageStyle';

import React from 'react';

export const App = () => {
  return (
    <Layout>
      <PageStyle>
        <PhoneForm />
        <Contacts />
      </PageStyle>
      <GlobalStyled />
    </Layout>
  );
};
