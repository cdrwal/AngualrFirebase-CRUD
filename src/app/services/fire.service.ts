import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap, map } from 'rxjs/operators';
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})

export class FireService {

  user: any = this.auth.user$.subscribe((x: any) => this.user = x)

  constructor(private db: AngularFirestore, private auth: AuthService) {
  }

  addTask(item: any) {
    this.db.collection(`users/${this.user.uid}/tasks`).add(item)
  }

  getTasks() {
    return this.auth.user$.pipe(
      switchMap((x: any) =>
        this.db.collection(`users/${x.uid}/tasks`).snapshotChanges()),
      map((y: any) =>
        y.map((inner: any) => {
          let item: any = inner.payload.doc.data();
          item.id = inner.payload.doc.id;
          item.defaultState = true;
          return item;
        }))
    )
  }

  completeTask(id: any) {
    this.db.doc(`users/${this.user.uid}/tasks/${id}`).delete()
  }

  editTask(id: any, item: any) {
    this.db.doc(`users/${this.user.uid}/tasks/${id}`).update(item)
  }

}
