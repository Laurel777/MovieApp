import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';
import{FormBuilder,Validators} from '@angular/forms'
@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.css']
})
export class AdminuserComponent implements OnInit {
  usr : User= new User();
  constructor(
    private userservice:UserService, 
    private router:Router,
    private Builder:FormBuilder
  ) { }
  result:any;

  name:String;
  ngOnInit(): void {
  }
  RenewForm=this.Builder.group({
    Username:this.Builder.control('',Validators.required),
    Password:this.Builder.control('',Validators.required)
  });

  SaveUser()
  {if(this.RenewForm.valid)
    {
this.userservice.updateuser(this.RenewForm.value.name).subscribe(data=>{
  alert("User Updated");
});
    }else{
alert("Please enter data and then only click on save");
    }

  }

}
