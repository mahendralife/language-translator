import { Component, OnInit } from '@angular/core';
import { user, User} from '../login/userinterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {};
  strongPassPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(form);
  }

}
