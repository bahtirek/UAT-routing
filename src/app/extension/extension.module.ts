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
import { ToasterModule } from '../shared/toaster/toaster.module';


const routes: Routes = [
  { 
    path: '', component: ExtensionComponent,
    children: [
      
      {
        path: 'test-case', 
        loadChildren: () => import('./test-case/test-case.module').then(m => m.TestCaseModule),
        data: {
          breadcrumb: 'Test Case'
        }
      },
      {
        path: 'events', 
        loadChildren: () => import('./events/events.module').then(m => m.EventsModule),
        data: {
          breadcrumb: 'Events'
        }
      },
      {
        path: 'regression', 
        loadChildren: () => import('./regression/regression.module').then(m => m.RegressionModule) ,
        data: {
          breadcrumb: 'Regression'
        }
      },
      {
        path: 'settings', 
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
        data: {
          breadcrumb: 'Settings'
        }
      },
      {
        path: 'execute', 
        loadChildren: () => import('./execute/execute.module').then(m => m.ExecuteModule),
        data: {
          breadcrumb: 'Execute'
        }
      },
      {
        path: 'dashboard', component: DashboardComponent,
        data: {
          breadcrumb: 'Dashboard'
        }
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
    ToasterModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    ExtensionComponent
  ]
  
})
export class ExtensionModule { }
