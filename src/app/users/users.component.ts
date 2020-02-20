import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import {User} from '../shared/models/User';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private _userService:UserService,
   
    
    ) {
      this.getUserList();
     
     }

     check=false;
     checkUserlist=true;
   
  private userlist:User;
  private _user:User;
  ngOnInit() {
    this.getUserList();
    this.userlist= new User();
  }

getUserList(){
    this._userService.getUsers()
    .subscribe((response)=>(this._user=response.data));

}

nextPage(id){
  id=id+1;
  this._userService.nextPage(id)
    .subscribe((response)=>(this._user=response.data));
}

 getUserById(id:string){
   this._userService.getUserById(id)
   .subscribe((response)=>(this.userlist=response.data));
   this.checkUserlist=false;
 }



getValue(){
  if(this.check===true){
    this.check=false;
  }else{
    this.check=true;
  }
 
}


  

}
