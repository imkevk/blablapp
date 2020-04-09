import PouchDB from 'pouchdb-react-native';
import { Message } from '../models/message.model';


let db: any;

export const chatService = {
  join,
  sendMessage
};

async function join(user: string, room: string): Promise<Message[]> {
  user = user || 'Anonymous';
  room = room || 'default';

  try {
    db = new PouchDB(room);
    const response = await db.allDocs({ include_docs: true });

    // TODO: fix type later
    return response.rows.map((row: { doc: Message }) => row.doc);
  } catch (e) {
    throw (e);
  }
}

function sendMessage(newMessage: Message): Promise<Message> {
  newMessage = { ...newMessage, created_at: new Date() };

  return db.post(newMessage).then(({ id }: { [key: string]: string }) =>
    ({ ...newMessage, id })
  );
}

/* class Chat {

  user = 'Anonymous';
  room = 'default';
  db: any;

  async join(user: string, room: string): Promise<Message[]> {
    this.user = user;
    this.room = room;

    this.db = new PouchDB(this.room);
    const response = await this.db.allDocs({ include_docs: true });
    return response.rows.map((row: any) => row.doc) as any;
  }

}

export const chatService = new Chat(); */