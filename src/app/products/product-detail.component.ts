import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get('id'));
  }
}
