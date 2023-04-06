import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  logout()
  {
    alert("Thank you for booking your ticket with us ..Please do visit again");
    this.router.navigate(['/admin/logout']);
  }
}
