import { Component } from '@angular/core';
import { CatImageService } from '../services/cat-image.service';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cat-post',
  templateUrl: './cat-post.component.html',
  styleUrls: ['./cat-post.component.css']
})
export class CatPostComponent {
  catUrl = '';

  constructor(public catImageService: CatImageService, private db: AngularFirestore, private auth: AuthService){}

  getNewCat(){
    this.catUrl = ''
    this.catImageService.getCatURL().subscribe(url => this.catUrl = url)
  }

  ngOnInit(){
    this.getNewCat()
  }

  saveCat(){ 
    this.db.collection('cat-posts').add({url: this.catUrl, uid: this.auth.uid})
    this.getNewCat()
  }
  
  dismissCat(){
    this.getNewCat()
  }

}
