import { ThunkAction } from 'redux-thunk';
import { Message } from '../models/message.model';
import { RootState } from '../reducers';
import { chatService } from '../services';
import { ChatActionTypes, JOIN_FAILURE, JOIN_REQUEST, JOIN_SUCCESS, SEND_MESSAGE, SEND_MESSAGE_FAILURE, SEND_MESSAGE_SUCCESS } from './types';

type ChatThunkActionType = ThunkAction<void, RootState, unknown, ChatActionTypes>;


export const join = (user: string, room: string): ChatThunkActionType => {
  return dispatch => {
    dispatch({ type: JOIN_REQUEST, user, room });

    chatService.join(user, room)
      .then(messages => dispatch({ type: JOIN_SUCCESS, messages }))
      .catch(error => dispatch({ type: JOIN_FAILURE, error }));
  };
};

export const sendMessage = (newMessage: Message): ChatThunkActionType => {
  return dispatch => {
    dispatch({ type: SEND_MESSAGE, message: newMessage });
    
    chatService.sendMessage(newMessage)
      .then(postedMessage => dispatch({ type: SEND_MESSAGE_SUCCESS, message: postedMessage }))
      .catch(error => dispatch({ type: SEND_MESSAGE_FAILURE, error }));
  };
};