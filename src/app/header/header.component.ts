import { Component, OnInit } from '@angular/core';
import {StoresService} from '../service/stores.service';
import {IStore} from '../models/istore';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   stores: IStore[];

  constructor(private storesService: StoresService,private activedRoute:ActivatedRoute,private route:Router) {
  }

  ngOnInit(): void {
    this.getStoreList();
  }

  getStoreList(){
    this.storesService.getStoreList().subscribe((response: IStore[]) =>{
      this.stores = response;
    })
  }
  changePage =(id)=> {
    this.route.navigate(['stores',id]);
  }
}
