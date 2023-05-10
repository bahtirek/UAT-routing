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
import { LoaderModule } from '../shared/loader/loader.module';
import { TestCaseModule } from './test-case/test-case.module';
import { EventsModule } from './events/events.module';
import { RegressionModule } from './regression/regression.module';
import { SettingsModule } from './settings/settings.module';
import { ExecuteModule } from './execute/execute.module';
import { AuthGuard } from '../guards/auth.guard';
import { DirectoriesModule } from '../shared/directories/directories.module';


const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    component: ExtensionComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: 'test-case',
            loadChildren: () => TestCaseModule,
          },
          {
            path: 'events',
            loadChildren: () => EventsModule
          },
          {
            path: 'regression',
            loadChildren: () => RegressionModule
          },
          {
            path: 'settings',
            loadChildren: () => SettingsModule
          },
          {
            path: 'execute',
            loadChildren: () => ExecuteModule
          },
          {
            path: 'dashboard', component: DashboardComponent,
          },
        ]
      }
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
    LoaderModule,
    DirectoriesModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ExtensionComponent
  ]

})
export class ExtensionModule { }
