import { Component } from '@angular/core';
import { PaginationEvent } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day31workshop';

  imgNum = 0

  whenNewNumber($event: PaginationEvent) {
    this.imgNum = $event.value;
  }
}
