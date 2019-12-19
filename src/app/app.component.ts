import { Component } from '@angular/core';


@Component ({
    selector: 'pm-root',
    template: `
        <nav class='navbar navbar-expand navbar-light bg-light'>
          <a class='navbar-brand'>{{Title}}</a>
          <ul class='nav nav-pills'>
            <li><a class='nav-link ' routerLink="/home">Home</a></li>&nbsp;
            <li><a class='nav-link' routerLink="/products">Product List</a></li>
          </ul>
          </nav>
          <div class="container">
            <router-outlet></router-outlet>
          </div>
    `
})
export class AppComponent {
 Title = 'Product Management App';
}
