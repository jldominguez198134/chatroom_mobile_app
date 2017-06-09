import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Injectable} from "@angular/core";

@Injectable()
export class MessagesService {

  items: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.items = db.list('/messages');
  }

  pushMessage(message) {
    this.items.push(message);
  }

}
