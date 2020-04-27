import { Message } from "../../models/message.model";

export const SYNC_SUCCESS = 'SYNC_SUCCESS';
export const SYNC_FAILURE = 'SYNC_FAILURE';

export const JOIN_REQUEST = 'JOIN_REQUEST';
export const JOIN_SUCCESS = 'JOIN_SUCCESS';
export const JOIN_FAILURE = 'JOIN_FAILURE';

export const SEND_MESSAGE = 'SEND_MESSAGE_REQUEST';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_FAILURE = 'SEND_MESSAGE_FAILURE';

interface SyncSuccessAction {
  type: typeof SYNC_SUCCESS;
  messages: Message[];
}

interface SyncFailureAction {
  type: typeof SYNC_FAILURE;
  error: Error;
}

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
  | SyncSuccessAction
  | SyncFailureAction
  | JoinRequestAction
  | JoinSuccessAction
  | JoinFailureAction
  | SendMessage
  | SendMessageSuccessAction
  | SendMessageFailureAction;