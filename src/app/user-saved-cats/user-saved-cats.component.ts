import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-user-saved-cats',
  templateUrl: './user-saved-cats.component.html'
})
export class UserSavedCatsComponent {

  constructor(private db: AngularFirestore){}
  pagesize = 5
  catPosts = this.db.collection('cat-posts', ref => ref.orderBy('url').limit(this.pagesize)).get().subscribe(data => console.log(data.docs))

  
  nextPage(){

  }

  previousPage(){
  }

}
