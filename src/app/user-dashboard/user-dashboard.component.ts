import { Component } from '@angular/core';
import { CatImageService } from '../services/cat-image.service';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
})
export class UserDashboardComponent {
  catUrl = '';

  constructor(public catImageService: CatImageService){}

  ngOnInit(){
    this.catImageService.getCatURL().subscribe(url => this.catUrl = url)
  }
  
  
}
