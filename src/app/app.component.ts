import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day31workshop';

  currentNumber = 0

  whenNewNumber($event: number) {
    this.currentNumber = $event
  }
}
