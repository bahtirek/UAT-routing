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
import { TestCaseModule } from './test-case/test-case.module';
import { TestCaseComponent } from './test-case/test-case.component';
import { SettingsModule } from './settings/settings.module';


const routes: Routes = [
  { 
    path: '', component: ExtensionComponent,
    children: [
      
      {
        path: 'test-case', loadChildren: () => import('./test-case/test-case.module').then(m => m.TestCaseModule)
        //path: 'test-case', component: TestCaseComponent
      },
      {
        path: 'events', component: EventsComponent 
      },
      {
        path: 'regression', component: RegressionComponent
      },
      {
        path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: 'execute', component: ExecuteComponent
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
    //SettingsModule,
    //TestCaseModule
  ],
})
export class ExtensionModule { }
