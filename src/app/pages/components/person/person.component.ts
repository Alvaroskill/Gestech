import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../models/peoples.module';

@Component({
  selector: 'app-persons',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {

  @Input() p : Person;

  constructor() { }

  ngOnInit() {}

}
