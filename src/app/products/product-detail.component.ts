import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../product-list/product';
import { Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  PageTitle = 'Product Details';
  product: IProduct;
  constructor(private route: ActivatedRoute, private router: Router) {
  }
   onBack() {
     this.router.navigate(['/products']);
   }
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.PageTitle +=  `: ${id}`;
    this.product = {
    productId: id,
    productName: 'Leaf Rake',
    productCode: 'GDN-0011',
    releaseDate: 'March 19, 2019',
    description: 'Leaf rake with 48-inch wooden handle.',
    price: 19.95,
    starRating: 3.2,
    imageUrl: 'assets/images/leaf_rake.png'
   };
}
}

