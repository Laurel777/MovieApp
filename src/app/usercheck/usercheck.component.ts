import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';
import{FormBuilder,Validators} from '@angular/forms'
@Component({
  selector: 'app-usercheck',
  templateUrl: './usercheck.component.html',
  styleUrls: ['./usercheck.component.css']
})
export class UsercheckComponent implements OnInit {
  usr : User= new User();
  constructor(private userservice:UserService, 
    private router:Router,
    private Builder:FormBuilder) { }
    result:any;
  ngOnInit(): void {
  }

  LoginForm=this.Builder.group({
    Username:this.Builder.control('',Validators.required),
    Password:this.Builder.control('',Validators.required)
  });
   
  checkLogin()
   { if(this.LoginForm.valid)
    {
      this.userservice.checkname(this.usr.name).subscribe(data =>{
        this.result=data;
        if(data==null)
        {
  alert("No such Username present please check again");
        }else{
          if(this.usr.name==this.result.name)
          { if(this.usr.password==this.result.password)
            {
    this.router.navigate(['/movie']);
            }else{
              alert("Invalid Password please check again");
            }
           
          }else{
             alert("Username does not exist"); 
          }
        }
                  });
  
    }else{
alert("Please fill in the details and then submit");
    }
       
   }


}
