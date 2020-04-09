import { ChatActionTypes, JOIN_FAILURE, JOIN_REQUEST, JOIN_SUCCESS, SEND_MESSAGE_SUCCESS } from "../actions/types";
import { Message } from "../models/message.model";

interface ChatState {
  messages: Message[];
  user: string;
  room: string;
  error: Error | null;
}

const initialState: ChatState = {
  messages: [
    { content: 'Contenu -18', author: 'Robert', created_at: new Date() },
    { content: 'Contenu -12', author: 'Daniel', created_at: new Date() },
    { content: 'Teenagers', author: 'Daniel', created_at: new Date() },
  ],
  user: '',
  room: '',
  error: null
};

export const chat = (state = initialState, action: ChatActionTypes): ChatState => {
  switch (action.type) {

    case JOIN_REQUEST:
      return { ...state, user: action.user, room: action.room, error: null };

    case JOIN_SUCCESS:
      return { ...state, messages: action.messages, error: null };

    case JOIN_FAILURE:
      return { ...state, error: action.error, messages: [] };

    /* case SEND_MESSAGE: */
    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        error: null,
        messages: [
          ...state.messages/* .filter(message => !!message.id) */, action.message
        ]
      }



    default:
      return state;

  }
}