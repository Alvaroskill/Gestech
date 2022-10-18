import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Person } from '../../models/person.module';
import { PersonsService } from '../../services/persons.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {

  
  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() person : Person;

  constructor(private peopleSvc:PersonsService) { }

  ngOnInit() {}



  onEditClick(){
    this.onEdit.emit(this.person);
  }

  onDeleteClick(){
    this.onDelete.emit(this.person);
  }

}
