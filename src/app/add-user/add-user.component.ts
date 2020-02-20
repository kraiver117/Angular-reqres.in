import { Component, OnInit } from '@angular/core';
import {  userRegister } from "../shared/models/UserRegister";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TokenService } from "../shared/services/token.service";
import { LoginService } from "../shared/services/login.service";
import {UserService} from '../shared/services/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  loginForm: FormGroup;
  _userRegister:userRegister;

  constructor(  private _formBuilder: FormBuilder,
    private _userService:UserService,
    private _tokenService: TokenService,
    private _router: Router) { }

  ngOnInit() {
    this._userRegister=new userRegister();
    this.loginForm = this._formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      job: ["", [Validators.required, Validators.minLength(2)]]
    });

    
  }

  checkUserRegister=true;

  
  registerUser(){
    console.log(this.loginForm);
    console.log(this.loginForm.controls.job);
    console.log(this.loginForm.controls.name);
    if (this.loginForm.valid) {
      // do call here
      const registerObject: userRegister = {
        name: this.loginForm.get("name").value,
        job: this.loginForm.get("job").value,
        
      };
      this._userService.registerUser(registerObject).subscribe(response => {
        console.log(response);
        //this._router.navigateByUrl("users");
        this._userRegister=response;
        this.checkUserRegister=false;
      });
    } else {
      // show some error.
    }

  }

  clearFields(){
    this.checkUserRegister=true;
  }
 

}
