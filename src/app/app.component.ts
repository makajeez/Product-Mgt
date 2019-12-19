import { Component } from '@angular/core';


@Component ({
    selector: 'pm-root',
    template: `
        <nav class='navbar navbar-expand navbar-light bg-light'>
          <a class='navbar-brand'>{{Title}}</a>
          <ul class='nav nav-pills'>
            <li><a class='nav-link'>Home</a></li>
            <li><a class='nav-link'>Home</a></li>
          </ul>
       <router-outlet></router-outlet>
    `
})
export class AppComponent {
 Title = 'Product Management App';
}
