import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import {SharedModule} from './shared/shared.module'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: './landing/landing.module#LandingModule' }
      // { path: 'users', loadChildren: 'app/modules/users/users.module#UsersModule' }
    ] 
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    CommonModule,
    routing,
    SharedModule
  ],
  exports: [RouterModule]
})
export class UiModuleModule { }
