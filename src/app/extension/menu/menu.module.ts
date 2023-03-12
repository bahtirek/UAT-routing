import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { RegressionBtnComponent } from './regression-btn/regression-btn.component';
import { SettingsBtnComponent } from './settings-btn/settings-btn.component';
import { ExecuteBtnComponent } from './execute-btn/execute-btn.component';
import { EventBtnComponent } from './event-btn/event-btn.component';
import { TestCaseBtnComponent } from './test-case-btn/test-case-btn.component';



@NgModule({
  declarations: [
    /* MenuComponent,
    RegressionBtnComponent,
    SettingsBtnComponent,
    ExecuteBtnComponent,
    EventBtnComponent,
    TestCaseBtnComponent */
  ],
  imports: [
    CommonModule
  ],
  exports: [
    /* MenuComponent,
    RegressionBtnComponent,
    SettingsBtnComponent,
    ExecuteBtnComponent,
    EventBtnComponent,
    TestCaseBtnComponent */
  ]
})
export class MenuModule { }
