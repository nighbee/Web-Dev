
// crating components 
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` Hello `,
  styles: `
    :host {
      color: blue;
    }
  `,
})
export class App {}


// updating components 

import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` Hello {{ city }}, {{ 1 + 1 }} `,
})
export class App {
  city = 'San Francisco';
}


// composing components 

