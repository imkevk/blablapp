import { Message } from "../../models/message.model";

export const JOIN_REQUEST = 'JOIN_REQUEST';
export const JOIN_SUCCESS = 'JOIN_SUCCESS';
export const JOIN_FAILURE = 'JOIN_FAILURE';

export const SEND_MESSAGE = 'SEND_MESSAGE_REQUEST';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_FAILURE = 'SEND_MESSAGE_FAILURE';


interface JoinRequestAction {
  type: typeof JOIN_REQUEST;
  user: string;
  room: string;
}

interface JoinSuccessAction {
  type: typeof JOIN_SUCCESS;
  messages: Message[];
}

interface JoinFailureAction {
  type: typeof JOIN_FAILURE;
  error: Error;
}

interface SendMessage {
  type: typeof SEND_MESSAGE;
  message: Message; 
}

interface SendMessageSuccessAction {
  type: typeof SEND_MESSAGE_SUCCESS;
  message: Message;
}

interface SendMessageFailureAction {
  type: typeof SEND_MESSAGE_FAILURE;
  error: Error;
}


export type ChatActionTypes =
  | JoinRequestAction
  | JoinSuccessAction
  | JoinFailureAction
  | SendMessage
  | SendMessageSuccessAction
  | SendMessageFailureAction;