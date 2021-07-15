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

  getTasks() {
    return this.db.collection('tasks').snapshotChanges()
  }

  completeTask(id: any) {
    this.db.doc(`tasks/${id}`).delete()
  }

}
