import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { Persistor } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import 'nprogress/nprogress.css';
import { SidebarProvider } from './contexts/SidebarContext';

import Root from './components/Root';

interface Props {
  persistor: Persistor;
  store: Store;
}

const App: React.FunctionComponent<Props> = ({ persistor, store }) => {
  return (
    <HelmetProvider>
      <SidebarProvider>
        <BrowserRouter>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Root />
            </PersistGate>
          </Provider>
        </BrowserRouter>
      </SidebarProvider>
    </HelmetProvider>
  );
};
export default App;
