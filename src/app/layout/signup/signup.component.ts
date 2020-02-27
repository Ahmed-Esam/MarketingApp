import { User } from './../../interface/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private as:AuthService ,private router:Router) { }

  ngOnInit(): void {
  }

  signup(form) {
    let data:User = form.value 
    this.as.signup(data.email,data.password)
    .then(data => console.log(data))
    .catch(err => console.log(err))
    this.router.navigate(['/']);
  }

}
