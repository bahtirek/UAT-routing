import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ExtensionComponent } from './extension.component';
import { MenuModule } from './menu/menu.module';
import { TestCaseComponent } from './test-case/test-case.component';


const routes: Routes = [
  { 
    path: '', component: ExtensionComponent,
    children: [
      {
        path: 'test-case', component: TestCaseComponent
      }
    ] 
  }
];

@NgModule({
  declarations: [
    ExtensionComponent,
  ],
  imports: [
    CommonModule,
    MenuModule,
    RouterModule.forChild(routes)
  ],
})
export class ExtensionModule { }
