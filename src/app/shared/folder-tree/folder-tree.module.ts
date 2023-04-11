import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FolderTreeComponent } from './folder-tree.component';



@NgModule({
  declarations: [
    FolderTreeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FolderTreeComponent
  ]
})
export class FolderTreeModule { }
