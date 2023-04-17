import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/extension', 
    pathMatch: 'full' 
  },
  { 
    path: 'extension', 
    loadChildren: () => import('./extension/extension.module').then(m => m.ExtensionModule), 
    canActivate: [AuthGuard] },
  {
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
  },
  { path: "**", redirectTo: "/extension", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }