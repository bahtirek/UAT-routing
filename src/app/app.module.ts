import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ExtensionModule } from './extension/extension.module';
import { AuthModule } from './auth/auth.module';
import { TestCaseModule } from './extension/test-case/test-case.module';
import { SettingsModule } from './extension/settings/settings.module';
import { RegressionModule } from './extension/regression/regression.module';
import { ExecuteModule } from './extension/execute/execute.module';
import { EventsModule } from './extension/events/events.module';
import { httpInterceptorProviders } from './interceptors';
import { AuthGuard } from './guards/auth.guard';
import { AppRoutingModule } from './app-routing.module';

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
    TestCaseModule,
    SettingsModule,
    FormsModule,
    RegressionModule,
    ExecuteModule,
    EventsModule,
    AppRoutingModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
  exports:[
  ]
})

export class AppModule { }
