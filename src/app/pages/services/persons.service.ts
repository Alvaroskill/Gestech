import { Injectable } from '@angular/core';
import { Person } from '../models/person.module';


@Injectable({
  providedIn: 'root'
})


export class PersonsService {

  public _person: Person[] = [
    {
      id: 0,
      name: 'Pepe',
      surname: 'Viyuela',
      age: 23,
      image: ''
    },
    {
      id: 1,
      name: 'Samuel',
      surname: 'Rodríguez',
      age: 73,
      image: ''
    },
    {
      id: 2,
      name: 'Juan',
      surname: 'Bustos',
      age: 45,
      image: ''
    },
    {
      id: 3,
      name: 'Gema',
      surname: 'Benitez',
      age: 20,
      image: ''
    },
    {
      id: 4,
      name: 'Sofia',
      surname: 'Aguilera',
      age: 36,
      image: ''
    }
  ]
  id:number = this._person.length+1;
  constructor() { }

  getPeople(){
    return this._person;
  }

  getPersonById(id:number){
    return this._person.find(p=>p.id==id);
  }

  deletePersonById(id:number){
    this._person = this._person.filter(p=>p.id != id); 
  }
  addPerson(person:Person){
    person.id = this.id++;
    this._person.push(person);
  }

  updatePerson(person:Person){
    var _person = this._person.find(p=>p.id==person.id);
    if(_person){
      _person.name = person.name;
      _person.surname = person.surname;
      _person.age = person.age;
      _person.image = person.image;
    }
    
  }
}
