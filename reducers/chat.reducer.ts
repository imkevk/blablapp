import { ChatActionTypes, JOIN_REQUEST } from "../actions/types";
import { Message } from "../models/message.model";

interface ChatState {
  messages: Message[];
  user: string;
  room: string;
}

const initialState: ChatState = {
  messages: [],
  user: '',
  room: '',
};

export const chat = (state = initialState, action: ChatActionTypes): ChatState => {
  switch (action.type) {

    case JOIN_REQUEST:
      return { ...state, user: action.user, room: action.room };

    /* case JOIN_SUCCESS:
      return { ...state, messages: action.messages }; */


    default:
      return state;

  }
}