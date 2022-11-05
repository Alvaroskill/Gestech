import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Person } from '../../models/person.model';
import { PersonsService } from '../../services/persons.service';






@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss'],
})
export class PersonDetailComponent implements OnInit {

  form:FormGroup;
  personId:number;
  mode:"New" | "Edit" = "New";
  @Input('person') set person(person:Person){
    if(person){
      this.form.controls.id.setValue(person.id);
      this.form.controls.name.setValue(person.name);
      this.form.controls.surname.setValue(person.surname);
      this.form.controls.age.setValue(person.age);
      this.form.controls.image.setValue(person.image);
      this.mode = "Edit";
    }
  }
  

  constructor(
    private datos: PersonsService,
    private modal:ModalController,
    private fb:FormBuilder
  ) { 
    this.form = this.fb.group({
      id:[null],
      name:['', [Validators.required]],
      surname:['', [Validators.required]],
      age:['', [Validators.required]],
      image:['']
    });
  }

  ngOnInit() {

  }

  onSubmit(){
    this.modal.dismiss({person:this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(result){
    this.modal.dismiss(null, 'cancel');
  }
  getPeople(): Person[] {
    return this.datos.getPeople();
  }

}