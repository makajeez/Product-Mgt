import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StarComponent } from './shared/star/star.component';
import { ProductService } from './product-list/product.service';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: WelcomeComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductListComponent },
      { path: '', pathMatch: 'full', redirectTo: 'home' }
    ])
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    WelcomeComponent,
    ProductDetailComponent
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
