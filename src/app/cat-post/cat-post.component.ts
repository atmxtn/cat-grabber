import { Component, Input } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-cat-post',
  templateUrl: './cat-post.component.html',
  styleUrls: ['./cat-post.component.css']
})
export class CatPostComponent {

  @Input() catUrl = '';

  imageToShow: any;
  isImageLoading?: boolean;

  constructor(private imageService: ImageService) {}

  ngOnInit(){
    this.getImageFromService()
  }

  createImageFromBlob(image: Blob) {
   let reader = new FileReader();
   reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
   }, false);

   if (image) {
      reader.readAsDataURL(image);
   }
  }

  getImageFromService() {
      this.isImageLoading = true;
      this.imageService.getImage(this.catUrl).subscribe(data => {
        this.createImageFromBlob(data);
        this.isImageLoading = false;
      }, error => {
        this.isImageLoading = false;
        console.log(error);
      });
  }

}
