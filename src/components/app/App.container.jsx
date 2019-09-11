import React from 'react';
import { IntlProvider } from 'react-intl';

import messagesEn from 'utils/translations/en.json';
import AppPresenter from './App.presenter';

const messages = {
  en: messagesEn,
};

const language = 'en';

function App() {
  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <AppPresenter />
    </IntlProvider>
  );
}

export default App;
