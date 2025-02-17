import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { PaginationEvent } from '../../models';

@Component({
  selector: 'app-pagination',
  standalone: false,
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  // numbers = 
  //   [0, 1, 2, 3, 4, 5,
  //    6, 7, 8, 9, 10, 11, 
  //    12, 13, 14, 15, 16, 17,
  //    18, 19, 20, 21, 22, 23, 24,
  //    25, 26, 27, 28, 29, 30
  //   ]
  numbers: number[] = Array.from({ length:31 }, (_, i) => i)

  steps = [1, 2, 3, 4, 5];

  step = 1;

  @Output()
  onNewNumber = new Subject<PaginationEvent>;

  @Input()
  currNumber = 0

  selectNumber($event: any) {
    this.currNumber = parseInt($event.target.value)
    // this.onNewNumber.next(this.currNumber)

    // Just because we want to try creating our own event (PaginationEvent)
    const event: PaginationEvent = {
      value: this.currNumber,
      step: this.step
    }
    this.onNewNumber.next(event);
  }

  modifyNumber(delta: number) {
    this.currNumber += delta

    if (this.currNumber < 0) {
      this.currNumber = 30
    } 

    if (this.currNumber > 30) {
      this.currNumber = 0
    }

    // Output the event to app-root
    // this.onNewNumber.next(this.currNumber)

      // Just because we want to try creating our own event (PaginationEvent)
      const event: PaginationEvent = {
        value: this.currNumber,
        step: this.step
      }
      this.onNewNumber.next(event);
  }

  stepChange($event : any) {
    this.step = parseInt($event.target.value);
  }

}
