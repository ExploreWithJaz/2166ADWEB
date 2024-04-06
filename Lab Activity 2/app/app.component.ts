import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('moveCard', [
      state('start', style({
        transform: 'translateX(0)',
      })),
      state('end', style({
        transform: 'translateX(20px)', // Adjust as needed
      })),
      transition('start <=> end', animate('200ms ease-in-out')),
    ]),
  ],
})
export class AppComponent implements OnInit {
  cardState: string = 'start'; // Initial state

  constructor() {}

  ngOnInit(): void {}

  toggleCardState() {
    this.cardState = this.cardState === 'start' ? 'end' : 'start';
  }
}
