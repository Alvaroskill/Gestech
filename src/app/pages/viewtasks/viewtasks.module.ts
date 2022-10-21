import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewtasksPageRoutingModule } from './viewtasks-routing.module';
import { TaskComponent } from '../task/task.component';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { TasksPage } from './viewtasks.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewtasksPageRoutingModule,
    ReactiveFormsModule
    
    
  ],
  declarations: [TaskComponent, TasksPage]
})
export class ViewtasksPageModule {}
