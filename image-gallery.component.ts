import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ImageUploadDialogComponent } from '../image-upload-dialog/image-upload-dialog.component';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  cardData=[]
  constructor(public dialog: MatDialog,private commonService:CommonService,private router: Router) { }

  ngOnInit() {
    this.commonService.getMockImageData().subscribe((response)=>{
      if(response){
        this.cardData = response;
      }
    });
  }
  add(){
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(ImageUploadDialogComponent,{
      width: '500px',
      height: '500px',
    }
);


    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.cardData.push(result);
      }

    });
  }
  onCheckBoxChecked(e,name){
    for(let data of this.cardData){
      if(name === data.name){
        data.checked = e.checked;
      }
    }
  }
  onDelete(){
    for(let i=0;i<this.cardData.length;i++){
      if(this.cardData[i].checked){
        this.cardData.splice(i, 1);
      }
    }
  }
  logout(){
    this.commonService.logout()
      .subscribe(response => {
        if (response && response.message === "Sucess") {
          this.router.navigate(['/login']);
        }
      });
  }
  }



