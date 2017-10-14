// The root component of the app

import { Component } from '@angular/core';


@Component({
  selector: 'app-root', // => the selector used to add this component in the index.html
  templateUrl: './app.component.html',  // => the associated template (view) of this component
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = 'ISAMM';
  isDisabled = true;
  place = 'Tunis';
  twoWay = 'Test';

  onClick(): void {
    this.name = 'Nader';
  }

}
