import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private db: AngularFirestore) { }

  addTask(item: any) {
    this.db.collection('tasks').add(item)
  }

  getTasks(localArray: any) {

    this.db.collection('tasks').snapshotChanges().subscribe(a => {
      a.forEach(b => {
        let item: any = b.payload.doc.data();
        item.id = b.payload.doc.id;
        localArray.push(item)
      })
    })

  }

}
