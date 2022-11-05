import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonDetailComponent } from './pages/components/person-detail/person-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskDetailComponent } from './pages/task-detail/task-detail.component';
import { ViewtasksPageModule } from './pages/viewtasks/viewtasks.module';
import { AssignmentDetailComponent } from './pages/components/assignment-detail/assignment-detail.component';
import { AssignmentComponent } from './pages/components/assignment/assignment.component';
import { AssignPage } from './pages/assign/assign.page';



@NgModule({
  declarations: [AppComponent, PersonDetailComponent, TaskDetailComponent, AssignmentDetailComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
