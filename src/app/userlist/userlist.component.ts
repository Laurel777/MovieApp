import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users:User[];
  result:any;

  constructor(private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
    this.getUsers();
  }
  private getUsers()
  {
    this.userService.getUserList().subscribe(data =>
      {
        this.users=data;
  
      });
  }
  
  private delete(id:number)
  {
  this.userService.deleteUser(id).subscribe(data=>{
    alert("User deleted");
    console.log(data);
  
  });
  }
  
  private getuserbyId(id:number)
  {
  this.userService.getuserbyid(id).subscribe(data =>{
    this.result=data;
   alert("The following employee details are "+
   "Username = " +this.result.name +
   "  Password = "+ this.result.password);
   
  });
  }
  
  private adduser()
  {
    this.router.navigate(['/adminuser']);
  }

}
