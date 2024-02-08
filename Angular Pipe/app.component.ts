import { Component } from '@angular/core';
import { Observable, map, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'midterm';
  time$ : Observable<Date>;

  presentDate = new Date();
  constructor() {
    this.time$ = interval(1000).pipe(map(()=>new Date()))
  }

  name = 'Jazper Garcia';

  pi : number = 3.141592653589793238462643383279502884197;

  petchay : number = 12.00;
  patatas : number = 21.00;

  data: Object = {
    name:"Shot", age: 155, food:'Blood',
    skills:[
      {sname: 'Flying', level: 'Expert'},
      {sname: 'Transformation', level: 'Intermediary'},
      {sname: 'Hyponosis', level: 'Expert'}
    ]
  }

  a : number = 20.7823;

  collection: string[] = ['New York','New Amsterdam','Manila','Shawty','Paris']
}
