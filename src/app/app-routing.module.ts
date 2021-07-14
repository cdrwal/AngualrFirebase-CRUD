import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SsoComponent } from "./pages/sso/sso.component";
import { EngineComponent } from "./pages/engine/engine.component";

const routes: Routes = [
  { path: '', component: EngineComponent },
  { path: 'sso', component: SsoComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
