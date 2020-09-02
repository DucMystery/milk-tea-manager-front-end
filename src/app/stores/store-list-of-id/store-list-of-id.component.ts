import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../service/products.service';
import {ActivatedRoute} from '@angular/router';
import {IProduct} from '../../models/iproduct';
import {IStore} from '../../models/istore';
import {StoresService} from '../../service/stores.service';
import {ITopping} from '../../models/itopping';
import {ToppingsService} from '../../service/toppings.service';
import {FormControl, FormGroup} from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-store-list-of-id',
  templateUrl: './store-list-of-id.component.html',
  styleUrls: ['./store-list-of-id.component.css']
})
export class StoreListOfIdComponent implements OnInit {

  id: number;
  products: IProduct[];
  store: IStore = {};
  toppings: ITopping[];
  sorts=['Name Asc','Name Desc','Price Asc','Price Desc'];
  sortProductForm: FormGroup = new FormGroup({sort: new FormControl('')});

  constructor(private productsService: ProductsService,
              private route: ActivatedRoute,
              private storeService: StoresService,
              private toppingService: ToppingsService) {


  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getStoreById(this.id);
    this.getToppingListByProductId();
    this.sortProduct();
  }


  getStoreById(storeId){
    this.storeService.getStoreById(storeId).subscribe((response: IStore)=> {
      this.store = response;
    })

  }
  getToppingListByProductId(){
    this.toppingService.getToppingListByProductId(this.id).subscribe((response: ITopping[]) => {
      this.toppings = response;
    })
  }

  getProductListOrderByNameAsc(){
    this.productsService.getProductListOrderByNameAsc(this.id).subscribe((response: IProduct[])=> {
      this.products = response;
    })
  }

  getProductListOrderByNameDesc(){
    this.productsService.getProductListOrderByNameDesc(this.id).subscribe((response: IProduct[])=> {
      this.products = response;
    })
  }

  getProductListOrderByPriceAsc(){
    this.productsService.getProductListOrderByPriceAsc(this.id).subscribe((response: IProduct[])=> {
      this.products = response;
    })
  }

  getProductListOrderByPriceDesc(){
    this.productsService.getProductListOrderByPriceDesc(this.id).subscribe((response: IProduct[])=> {
      this.products = response;
    })
  }


  sortProduct() {
    const currentSort = this.sortProductForm.value.sort;
    console.log(currentSort);
    if (currentSort === this.sorts[1]){
      this.getProductListOrderByNameDesc();
    }else if (currentSort === this.sorts[2]){
      this.getProductListOrderByPriceAsc();
    }else if (currentSort === this.sorts[3]){
      this.getProductListOrderByPriceDesc();
    }else {
      this.getProductListOrderByNameAsc();
    }
  }
}
