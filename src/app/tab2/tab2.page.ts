import { Component } from '@angular/core';
import {PhotoService} from 'src/app/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  constructor(public photoService: PhotoService){
  }
  addPhotoToGallery(){
    this.photoService.addNewToGallery();

    }

  }
