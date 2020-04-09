import PouchDB from 'pouchdb-react-native';
import { Message } from '../models/message.model';

class Chat {

  user!: string;
  room!: string;
  db: PouchDB.Database = new PouchDB();

  async join(user: string, room: string): Promise<Message[]> {
    this.user = user || 'Anonymous';
    this.room = room || 'default';

    const response = await this.db.allDocs({ include_docs: true });

    // TODO: fix type later
    return response.rows.map(row => row.doc) as any;
  }

}

export const chatService = new Chat();