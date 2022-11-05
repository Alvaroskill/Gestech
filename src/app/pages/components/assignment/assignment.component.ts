import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Assign } from '../../models/assignement.model';
import { Person } from '../../models/person.model';
import { Task } from '../../models/task.module';
import { AssignmentService } from '../../services/assignment.service';
import { PersonsService } from '../../services/persons.service';
import { TasksService } from '../../services/task.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss'],
})
export class AssignmentComponent implements OnInit {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() assignment:Assign;

  constructor(
    private peopleSvc:PersonsService,
    private tasksSvc:TasksService,
    private assignmentsSvc:AssignmentService
  ){
  }

  ngOnInit(
  ) {

  }

  getTask():Task{
    var idTask = this.assignment.idTask;
    if(idTask)
      return this.tasksSvc.getTasksById(idTask);
    return undefined;
  }

  getPerson():Person{
    console.log(new Date().toISOString());
    var personId = this.assignment.idPerson;
    if(personId)
      return this.peopleSvc.getPersonById(personId);
    return undefined;
  }

  onEditClick(){
    this.onEdit.emit(this.assignment);
  }

  onDeleteClick(){
    this.onDelete.emit(this.assignment);
  }
}
