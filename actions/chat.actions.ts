import { ChatActionTypes, JOIN_REQUEST } from './types';

export function join(user: string, room: string): ChatActionTypes {
  return { type: JOIN_REQUEST, user, room }
}
