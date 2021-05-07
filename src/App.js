import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Planner } from './components/layout/Planner';
import { Layout } from './components/layout/Layout';

const App = ({ store, persistor }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Planner />
        <Layout />
      </PersistGate>
    </Provider>
  );
};

export default App;
