import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreListOfIdComponent } from './store-list-of-id/store-list-of-id.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {path: ':id',component: StoreListOfIdComponent}
]

@NgModule({
  declarations: [StoreListOfIdComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class StoresModule { }
