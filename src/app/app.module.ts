import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ExtensionModule } from './extension/extension.module';
import { AuthModule } from './auth/auth.module';

declare global {
  interface Window {
    selectButtonComponent?: any;
  }
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    ExtensionModule,
    AuthModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/auth', pathMatch: 'full' },
      { path: 'extension', loadChildren: () => import('./extension/extension.module').then(m => m.ExtensionModule) },
      { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
  ]
})

export class AppModule { }
