import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ExtensionComponent } from './extension/extension.component';
import { AuthComponent } from './auth/auth.component';
import { TestCaseBtnComponent } from './extension/menu/test-case-btn/test-case-btn.component';
import { MenuComponent } from './extension/menu/menu.component';
import { RegressionBtnComponent } from './extension/menu/regression-btn/regression-btn.component';
import { SettingsBtnComponent } from './extension/menu/settings-btn/settings-btn.component';
import { EventBtnComponent } from './extension/menu/event-btn/event-btn.component';
import { ExecuteBtnComponent } from './extension/menu/execute-btn/execute-btn.component';
import { TestCaseComponent } from './extension/test-case/test-case.component';
import { ExtensionModule } from './extension/extension.module';

declare global {
  interface Window {
    selectButtonComponent?: any;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegressionBtnComponent,
    SettingsBtnComponent,
    ExecuteBtnComponent,
    EventBtnComponent,
    TestCaseBtnComponent,
    ExtensionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ExtensionModule,
    RouterModule.forRoot([
      { path: 'extension', component: ExtensionComponent,
      children: [
        {
          path: 'test-case', component: TestCaseComponent
        }
      ]
    },
      { path: 'auth', component: AuthComponent},
      { path: '', redirectTo: '/extension', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    MenuComponent,
    RegressionBtnComponent,
    SettingsBtnComponent,
    ExecuteBtnComponent,
    EventBtnComponent,
    TestCaseBtnComponent,
    ExtensionComponent
  ]
})

export class AppModule { }
