import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {path:'',component: AuthComponent,
  children:[
    {path:'login',component: LoginComponent},
    {path:'register',component:RegisterComponent},
  ]}


];

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
