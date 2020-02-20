import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import {User} from '../shared/models/User';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
  
})
export class DetailUserComponent implements OnInit {

  constructor(private _userService:UserService,) { }

  private _user:User;
  ngOnInit() {
    this._user= new User();
  }
  checkUser=false;
  index='';

  getFalseList(){
    this.checkUser=false;
  }
    getUserByID(id:string){
      this._userService.getUserById(id)
      .subscribe((response)=>(this._user=response.data));
      this.checkUser=true;
    }
}
