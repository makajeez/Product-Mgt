import { Component } from '@angular/core';


@Component ({
    selector: 'app-root',
    template: `
      <div><h1>{{Title}}</h1>
        <app-product-list></app-product-list>
      </div>
    `
})
export class AppComponent {
 Title = 'Product Management App';
}
