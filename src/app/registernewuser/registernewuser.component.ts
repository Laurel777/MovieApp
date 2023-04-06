import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registernewuser',
  templateUrl: './registernewuser.component.html',
  styleUrls: ['./registernewuser.component.css']
})
export class RegisternewuserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  SaveUser()
 {
  alert("Your details have been saved");
 }

}
