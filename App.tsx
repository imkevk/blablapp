import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Chat, Home } from './components';
import { rootReducer } from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

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