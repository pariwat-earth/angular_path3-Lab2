import { Component, ViewChild, OnInit } from '@angular/core';
import { ProductListComponent } from './catalog/product-list/product-list.component';
import { BackedService } from './backed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('productList', {static: true}) productList: ProductListComponent;

  constructor(private backendService: BackedService){}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.productList.products = this.backendService.getProduct();
  }
}
