import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ExtensionComponent } from './extension.component';
import { MenuModule } from './menu/menu.module';


const routes: Routes = [
  { path: '', component: ExtensionComponent }
];

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
  ],
  exports: [

  ]
})
export class ExtensionModule { }
