import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Planner } from './components/layout/Planner';
import { Layout } from './components/layout/Layout';

const App = ({ store, persistor }) => {
  const reactAppData = window.rpReactPlugin || {};
  const { appSelector } = reactAppData;
  const appAnchorElement = document.querySelector(appSelector);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Planner />
        <Layout />
        {/* {appAnchorElement.id === 'route-planner' ? <Layout /> : null} */}
      </PersistGate>
    </Provider>
  );
};

export default App;
