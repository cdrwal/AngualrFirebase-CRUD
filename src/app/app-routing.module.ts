import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SsoComponent } from "./pages/sso/sso.component";
import { EngineComponent } from "./pages/engine/engine.component";

import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: EngineComponent, canActivate: [AuthGuard]},
  { path: 'sso', component: SsoComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
