import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Chat, Home } from './components';
import { rootReducer } from './reducers';

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Stack key="root">
          <Scene key="home" component={Home} title="Home" />
          <Scene key="chat" component={Chat} title="Chat" />
        </Stack>
      </Router>
    </Provider>
  );
}