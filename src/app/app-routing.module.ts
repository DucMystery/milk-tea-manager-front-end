import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';

const routes: Routes = [
  {
    path: 'stores',
    loadChildren: () => import('./stores/stores.module').then(m => m.StoresModule)
  },
  {path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
