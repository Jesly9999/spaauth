import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup//signup - variable FormGroup - to collect the data(bulidin thing)
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    this.signupForm=this.formbuilder.group(
      {
        name:[''],
        mail:[''],
        contact:[],
        pwd:['']
      }
    )
  }
  signup()
  {
    this.http.post<any>('http://localhost:3000/users',this.signupForm.value).subscribe(res=>
    {
      alert("Successfully added");
    });
  }
}
