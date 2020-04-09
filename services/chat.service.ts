import PouchDB from 'pouchdb-react-native';
import { Message } from '../models/message.model';
import { AllDocsResponse } from '../models/pouchdb.model';


let db: any;

export const chatService = {
  join,
  sendMessage
};

async function join(user: string, room: string): Promise<Message[]> {
  user = user || 'Anonymous';
  room = room || 'default';

  db = new PouchDB(room);

  return db.allDocs({ include_docs: true })
    .then((response: AllDocsResponse<Message>) =>
      response.rows
        .map(row => row.doc)
        .sort((a: Message, b: Message) => a.created_at > b.created_at ? 1 : -1)
    )
    .catch((error: string) => { throw (new Error(error)) });
}

function sendMessage(newMessage: Message): Promise<Message> {
  newMessage = { ...newMessage, created_at: new Date() };

  return db.post(newMessage)
    .then(({ id }: any) => ({ ...newMessage, id }));
}