import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm!: FormGroup
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    this.signinForm=this.formbuilder.group(
      {
        mail:[''],
        pwd:['']
      }
    )
  }
signin()
{
  this.http.get<any>('http://localhost:3000/users').subscribe(res=>
    {
      const user=res.find((a:any)=>
      {
        return a.mail===this.signinForm.value.mail && a.pwd===this.signinForm.value.pwd;
      });
      if(user)
      {
        alert("User exist");
        this.signinForm.reset();
      }
      else{
        alert("User doesn't exist");
      }
    });
}
}
