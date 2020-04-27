import moment from 'moment';
import PouchDB from 'pouchdb-react-native';
import { Message } from '../models/message.model';
import { AllDocsResponse } from '../models/pouchdb.model';


let remoteDb: any;
let db: any; // TODO: check PouchDB types

const remoteDbUrl = 'http://gathor.org:5984';
const dbSyncOptions: { [key: string]: boolean } = { live: true, retry: true, continus: true };

export const chatService = {
  join,
  sendMessage
};

async function join(user: string, room: string, onSync: Function, onError: Function): Promise<Message[]> {
  user = user || 'Anonymous';
  room = initializeRoom(room);

  initializeRemoteDatabase(room, onSync, onError);

  return db.allDocs({ include_docs: true })
    .then((response: AllDocsResponse<Message>) =>
      response.rows
        .map(row => row.doc)
        .sort((a: Message, b: Message) => moment(a.created_at).isAfter(moment(b.created_at)) ? 1 : -1)
    )
    .catch((error: string) => { throw (new Error(error)) });
}

function initializeRoom(room: string): string {
  if (/^_/.test(room) || !room) {
    return 'general';
  }

  return room.toLowerCase();
}

function initializeRemoteDatabase(room: string, onSync: Function, onError: Function): void {
  db = new PouchDB(room);
  
  remoteDb = db.sync(`${remoteDbUrl}/${room}`, dbSyncOptions)
    .on('change', (event: any) => onSync(event.change.docs)) // TODO: check type later
    .on('error', (error: any) => onError(error));
}

function sendMessage(newMessage: Message): Promise<Message> {
  newMessage = { ...newMessage, created_at: new Date() };

  return db.post(newMessage)
  .then(({ id }: any) => ({ ...newMessage, id }));
}