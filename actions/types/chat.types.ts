export const JOIN_REQUEST = 'JOIN_REQUEST';
export const JOIN_SUCCESS = 'JOIN_SUCCESS';

interface JoinRequestAction {
  type: typeof JOIN_REQUEST;
  user: string;
  room: string;
}

interface JoinSuccessAction {
  type: typeof JOIN_SUCCESS;
}


export type ChatActionTypes =
  | JoinRequestAction
  | JoinSuccessAction;