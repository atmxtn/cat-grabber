import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, switchMap } from 'rxjs';

@Component({
  selector: 'app-user-saved-cats',
  templateUrl: './user-saved-cats.component.html'
})
export class UserSavedCatsComponent {

  constructor(private db: AngularFirestore){}

  pagesize = 5
  currentPage$ = new BehaviorSubject(1)
  catPosts = this.currentPage$.pipe(
    switchMap(currentPage => {
      return this.db.collection('cat-posts', ref => ref.orderBy('url').limit(this.pagesize)).valueChanges()
    })
  ) 

  nextPage(){
    this.currentPage$.next(this.currentPage$.value + 1)
  }

  previousPage(){
    this.currentPage$.next(this.currentPage$.value - 1)
  }

}
