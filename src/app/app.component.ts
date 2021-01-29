import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Multiplicação';
  num1 = 0;
  num2 = 0;
  num3 = 0;

  multiply() {
    this.num3 = this.num1 * this.num2;
  }
}
