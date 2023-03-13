import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ExtensionComponent } from './extension.component';
import { MenuModule } from './menu/menu.module';
import { EventsComponent } from './events/events.component';
import { RegressionComponent } from './regression/regression.component';
import { SettingsComponent } from './settings/settings.component';
import { ExecuteComponent } from './execute/execute.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { 
    path: '', component: ExtensionComponent,
    children: [
      
      {
        path: 'test-case', loadChildren: () => import('./test-case/test-case.module').then(m => m.TestCaseModule)
      },
      {
        path: 'events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule) 
      },
      {
        path: 'regression', loadChildren: () => import('./regression/regression.module').then(m => m.RegressionModule) 
      },
      {
        path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: 'execute', loadChildren: () => import('./execute/execute.module').then(m => m.ExecuteModule)
      },
      {
        path: 'dashboard', component: DashboardComponent
      },
    ] 
  }
];

@NgModule({
  declarations: [
    ExtensionComponent,
    EventsComponent,
    ExecuteComponent,
    RegressionComponent,
    SettingsComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MenuModule,
    RouterModule.forChild(routes),
  ],
})
export class ExtensionModule { }
