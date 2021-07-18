import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class FireService {

  // TODO: Fix the await for User!!
  user: any = this.auth.user$.subscribe((x:any) => this.user = x)

  constructor(private db: AngularFirestore, private auth: AuthService) { 
  }

  addTask(item: any) {
    this.db.collection(`users/${this.user.uid}/tasks`).add(item)
  }

  getTasks() {
    return this.db.collection(`users/${this.user.uid}/tasks`).snapshotChanges()
  }

  completeTask(id: any) {
    this.db.doc(`users/${this.user.uid}/tasks/${id}`).delete()
  }

  editTask(id: any, item: any) {
    this.db.doc(`users/${this.user.uid}/tasks/${id}`).update(item)
  }

}
