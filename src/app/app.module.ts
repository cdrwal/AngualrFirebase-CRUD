import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AddTaskComponent } from './core/add-task/add-task.component';
import { TaskListComponent } from './core/task-list/task-list.component';
import { SsoComponent } from './pages/sso/sso.component';
import { EngineComponent } from './pages/engine/engine.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddTaskComponent,
    TaskListComponent,
    SsoComponent,
    EngineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
