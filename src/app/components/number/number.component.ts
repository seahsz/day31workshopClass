import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number',
  standalone: false,
  templateUrl: './number.component.html',
  styleUrl: './number.component.css'
})
export class NumberComponent {

  @Input()
  currNumber = 0;

  get imgPath(): string {
    return `/numbers/number${this.currNumber}.jpg`;
  }
}
