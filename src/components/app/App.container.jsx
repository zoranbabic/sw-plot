import React from 'react';
import { IntlProvider } from 'react-intl';

import messagesEn from 'utils/translations/en.json';
import PlotForm from 'components/plotForm';

const messages = {
  en: messagesEn,
};

const language = 'en';

function App() {
  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <PlotForm />
    </IntlProvider>
  );
}

export default App;
