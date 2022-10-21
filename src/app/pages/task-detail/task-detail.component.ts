import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Task } from '../models/task.module';
import { TasksService } from '../services/task.service'; 

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent implements OnInit {

  tasks: Task;
  form: FormGroup;
  mode: "New" | "Edit" = "New";
  @Input('task') set task(task: Task) {
    if (task) {
      this.form.controls.id.setValue(task.id);
      this.form.controls.taskName.setValue(task.taskName);
      this.form.controls.taskDescription.setValue(task.taskDescription);
      this.form.controls.taskDifficulty.setValue(task.taskDifficulty);
      this.form.controls.taskTimeInSecs.setValue(task.taskTimeInSecs);
      this.mode = "Edit";
    }
  }
  constructor(private taskService: TasksService, private fb: FormBuilder, private modal: ModalController) {
    this.form = this.fb.group({
      id: [null],
      taskName: ['', [Validators.required]],
      taskDescription: ['', [Validators.required]],
      taskDifficulty: ['', [Validators.required]],
      taskTimeInSecs: ['', [Validators.required]]
      
      
    })
  }
  ngOnInit() { }

  createTask() {
    console.log(this.form.value);
  }

  onSubmit() {
    this.modal.dismiss({ task: this.form.value, mode: this.mode }, 'ok');
  }

  onDismiss(result) {
    this.modal.dismiss(null, 'cancel');
  }

  getTasks(): Task[] {
    return this.taskService.getTasks();
  }

}