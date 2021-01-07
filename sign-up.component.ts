import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router,private commonService:CommonService) { }

  ngOnInit() {
     this.loginForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      age: [''],
      date: [''],
      emailFormControl: ['', [Validators.required,Validators.email]]

    });
  }
  login() {
    this.commonService.getMockLoginData().subscribe((response)=>{
      if(response){
        this.router.navigate(['/image-gallery']);
      }
      else{
        alert("Login Unsuccessful!");
      }

    });

  }

}
