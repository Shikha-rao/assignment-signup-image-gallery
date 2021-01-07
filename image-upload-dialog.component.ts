import { Component, OnInit,Inject ,ViewChild,ElementRef} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-image-upload-dialog',
  templateUrl: './image-upload-dialog.component.html',
  styleUrls: ['./image-upload-dialog.component.css']
})
export class ImageUploadDialogComponent implements OnInit {
  imagePreview:string;
  @ViewChild("inputTitle") inputTitle: ElementRef;
  constructor(public dialogRef: MatDialogRef<ImageUploadDialogComponent>,
    ) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    if(this.inputTitle.nativeElement.value && this.imagePreview){
      this.dialogRef.close({name:this.inputTitle.nativeElement.value,image:this.imagePreview,checked:false});
    }
    else{
      alert("Please enter details!");
    }
  }
  onImagePicked(event:Event){
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () =>{
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
