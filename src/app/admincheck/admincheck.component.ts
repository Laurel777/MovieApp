import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{FormBuilder,Validators} from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-admincheck',
  templateUrl: './admincheck.component.html',
  styleUrls: ['./admincheck.component.css']
})
export class AdmincheckComponent implements OnInit {
  usr : User= new User();
  constructor(
    private userservice:UserService,
    private router:Router,
    private Builder:FormBuilder) { }

    result:any;
    name:string;

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
    this.router.navigate(['/admin']);
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
