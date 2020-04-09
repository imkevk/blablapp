import { combineReducers } from 'redux';
import { chat } from './chat.reducer';

export const rootReducer = combineReducers({
  chat
});

export type RootState = ReturnType<typeof rootReducer>;