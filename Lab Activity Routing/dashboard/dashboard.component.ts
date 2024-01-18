import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  //Using ngIf to toggle text display
  showText: boolean = false;

  toggleText() {
    this.showText = !this.showText;
  }

  customer = [ 
    { firstName: 'Rafael', lastName: 'Gomez', email: 'rafael.gomez@test.com', password: 'mypassword' },   
    { firstName: 'Roberto', lastName: 'Calvo', email: 'roberto.calvo@test.com', password: '123456789' }, 
    { firstName: 'Joan', lastName: 'Pastor', email: 'joan.pastor@test.com', password: 'password' }, 
    { firstName: 'Olga', lastName: 'Santana', email: 'olga.santana@test.com', password: 'passw0rd' }, 
    { firstName: 'Sofia', lastName: 'Gutierrez', email: 'sofia.gutierrez@test.com', password: 'p@ssWORD' } 
    ];
}
